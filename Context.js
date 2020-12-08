import React, { createContext, useState, useEffect, useReducer } from "react";

const Context = createContext();

const endPoint = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=1&search=code";

function ContextProvider({ children }) {
  // const [jobs, setJobs] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);

  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
        case "SET_JOBS" : {
          return {...state, jobs: action.getAllJobs}
          break;
        }
        default:
          return state
    }
  }
  , {
    jobs: [],
    inputValue: "",
    items: [],
  })

  async function getJobs() {
    const response = await fetch(endPoint);
    const data = await response.json();
    console.log(data);
    dispatch({type: "SET_JOBS", getAllJobs: data});
    // setJobs(data)
  }

  function searchItems(e) {
      setInputValue(e.target.value);
      const filteredItems = jobs.filter(job => {
        return job.title.toString() === e.target.value;
      })
      setJobs(filteredItems)
  }

  useEffect(() => {
    getJobs();
  }, []);

  useEffect(() => {
    setTimeout(() =>  setIsLoaded(false), 1000) 
  })

  return (
    <Context.Provider value={{ state, dispatch, isLoaded}}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
