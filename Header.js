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
  const { jobs, inputValue } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const searchJobs = (e) => {
    dispatch({type: "SET_INPUT_VALUE", inputValue: e.target.value});
    const filteredCities = jobs.filter(job => {
        return job.location.toLowerCase() === e.target.value;
    })
    dispatch({type: "SET_JOBS", filteredCities})
  }

  // const allJobs = jobs.map((job) => (
  //     console.log(job)
  // ));

  // const filteredJobs = allJobs.filter((job) => {
  //     console.log(job)
  //   return job.toLowerCase().includes(inputValue.toLowerCase())
  // }

  // );

  // useEffect(() => {
  //   searchJobs();
  // }, [inputValue]);

  return (
    <HeaderStyle>
      <h1>Github Jobs</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="input"
          value={inputValue}
          onChange={searchJobs}
          placeholder="Title, companies, experti..."
        />
        <button>Search</button>
      </form>
    </HeaderStyle>
  );
}
