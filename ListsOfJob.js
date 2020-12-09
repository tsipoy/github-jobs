import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "./Context";
import styled from "styled-components";

const MainContent = styled.div`
  display: flex;
  flex-dirextion: row;
  background-color: #ffffff;
  box-shadow: 0px 6px 22px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding-block-end: 23px;
  padding-block-start: 23px;
  margin-block-end: 50px;
  padding: 16px;

  nav {
    margin-block-start: -38px;
    padding-inline-start: 50px;
  }

  ul {
    padding-inline-start: 0;
  }

  li {
    list-style: none;
    padding-block-start: 20px;
  }

  img {
    width: 100px;
    height: 100px;
  }

  ul:nth-of-type(1) li:nth-of-type(1) {
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
  }

  .type {
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    border: 1px solid #334680;
    box-sizing: border-box;
    border-radius: 4px;
    max-width: fit-content;
    padding-block-start: 6px;
    padding-block-end: 6px;
    padding-inline-end: 8px;
    padding-inline-start: 8px;
    margin-block-start: 20px;
  }

  ul:nth-of-type(2) {
    display: flex;
    flex-direction: row;
  }

  ul:nth-of-type(2) li {
    padding-inline-end: 29px;
    color: #b9bdcf;
  }

  @media (min-width: 900px) {
    padding-block-end: 0;
    margin-inline-start: 23px;
  }
`;
export default function ListsOfJob() {
  const { state } = useContext(Context);
  const {jobs} = state

  //logo, company name, job, full time, place, created
  const allJobs = jobs.map((job) => (
    <MainContent key={job.id}>
      <img src={job.company_logo} />
      <nav>
        <ul>
          <li>{job.company}</li>
          <li>
            <Link to={`/details/${job.id}`}>
              {job.title}
              </Link>
          </li>
          <li className="type">{job.type}</li>
        </ul>
        <ul>
          <li>
            <i className="ri-earth-fill"></i> {job.location}
          </li>
          <li>
            <i className="ri-time-line"></i> {job.created_at}
          </li>
        </ul>
      </nav>
    </MainContent>
  ));

  return (
    <div>
      {allJobs}
    </div>
  );
}
