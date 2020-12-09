import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Context } from "./Context";
const HeaderStyle = styled.div`
  padding-block-end: 29px;

  form {
    background-color: #ffffff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    padding-block-end: 4px;
    padding-block-start: 4px;
    padding-inline-end: 5px;
    border-radius: 4px;
    width: -webkit-fill-available;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  input {
    padding: 10px;
    border-radius: 8px;
    border: none;
  }

  button {
    background-color: #1e86ff;
    border-radius: 4px;
    color: white;
    line-height: 19px;
    padding-block-start: 14px;
    padding-block-end: 14px;
    padding-inline-end: 27px;
    padding-inline-start: 27px;
    border: none;
  }

  @media (min-width: 900px) {
    form {
      margin: auto;
      max-width: 900px;
    }
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

  if (!jobs) return null;

  const filteredJobs = jobs.filter((job) => {
    console.log(job.title === inputValue);
    return job.title.toLowerCase().includes(inputValue.toLowerCase());
  });

  useEffect(() => {
    setLocation(filteredJobs);
  }, []);

  return (
    <HeaderStyle>
      <h1>Github Jobs</h1>
      <div className="header-style">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Title, companies, experti..."
          />
          <button onClick={(e) => setInputValue(e.target.value)}>Search</button>
        </form>
      </div>
    </HeaderStyle>
  );
}
