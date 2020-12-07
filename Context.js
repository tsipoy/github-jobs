import React, { createContext, useState, useEffect } from "react";

const Context = createContext();

const endPoint = " https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=ruby&page=1/api";

function ContextProvider({children}) {
    const [jobs, setJobs] = useState([]); 

  async function getJobs() {
      const response = await fetch(endPoint);
      const data = await response.json();
      console.log(data)
      setJobs(data);
  }
    useEffect(() => {
        getJobs()
    }, [])
    return (
            <Context.Provider value={{jobs}}>
                {children}
            </Context.Provider>
    )
}

export { ContextProvider, Context }

