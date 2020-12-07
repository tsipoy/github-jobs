import React, { createContext, useState, useEffect } from "react";

const Context = createContext();

const endPoint = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=ruby&page=1/api";

function ContextProvider({ children }) {
  const [jobs, setJobs] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);

  async function getJobs() {
    const response = await fetch(endPoint);
    const data = await response.json();
    console.log(data);
    setJobs(data);
  }


  const filterItems = jobs.filter((job) => {
      job.company.toLowerCase().includes(inputValue)
  });

  useEffect(() => {
    getJobs(filterItems);
  }, [items]);

  useEffect(() => {
    getJobs();
  }, []);

  useEffect(() => {
    setTimeout(() =>  setIsLoaded(false), 15000) 
  })

  return (
    <Context.Provider value={{ jobs, inputValue, setInputValue, isLoaded }}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
