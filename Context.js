import React, { createContext, useState, useEffect, useReducer } from "react";

const Context = createContext();

const endPoint = " https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=1&search=code";

function ContextProvider({ children }) {

  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
        case "SET_JOBS" : {
          return {...state, jobs: action.getAllJobs}
          break;
        }
        case "SET_LOADING": {
          return {...state, isLoaded: false}
          break;
        }

        case "SET_INPUT_VALUE": {
          return {...state, inputValue: inputValue.value}
        }
        case "IS_CHECKED": {
          const newLists = isChecked.filter(newList => newList.type !== action.isChecked)
          return {...state, newLists}
        }
        default:
          return state
    }
  }
  , {
    jobs: [],
    isLoaded: true,
    isChecked: false,
    inputValue: "",
    location: []
  })


  async function getJobs() {
    const response = await fetch(endPoint);
    const data = await response.json();
    dispatch({type: "SET_JOBS", getAllJobs: data});
  }
  
  useEffect(() => {
    setTimeout(() =>  dispatch({ type: "SET_LOADING"}), 10000) 
  }, [])
  
  useEffect(() => {
    getJobs();
  }, []);


  return (
    <Context.Provider value={{ state, dispatch}}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
