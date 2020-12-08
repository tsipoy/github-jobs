import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Context } from "./Context";
const HeaderStyle = styled.div`
  padding-block-end: 29px;

  form {
    background-color: cadetblue;
    padding-block-end: 41px;
    padding-block-start: 42px;
    padding-inline-end: 13px;
    padding-inline-start: 13px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 8px;
  }

  input {
    padding: 10px;
    border-radius: 8px;
  }
`;

export default function Header() {
  const { state } = useContext(Context);
  const { jobs } = state;
  const [inputValue, setInputValue] = useState("");
  const [location, setLocation] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const allJobs = jobs.map((job) => (
      console.log(job)
  ));

  const filteredJobs = allJobs.filter((job) => {
      console.log(job.location === "New York")
    // return job.toLowerCase().includes(inputValue.toLowerCase())
  }

  );

  useEffect(() => {
    setLocation(filteredJobs);
  }, [inputValue]);

  return (
    <HeaderStyle>
      <h1>Github Jobs</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Title, companies, experti..."
        />
        <button>Search</button>
      </form>
    </HeaderStyle>
  );
}
