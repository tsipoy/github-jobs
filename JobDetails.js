import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "./Context";

import styled from "styled-components";

const DetailsWrapper = styled.div`
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
`;

export default function JobDetails() {
  const { state } = useContext(Context);
  const { jobs } = state;

  const eachJobDetails = jobs.map((job) => (
    <DetailsWrapper key={job.id}>
      <ul>
        <li>{job.title}</li>
        <li className="type">{job.type}</li>
      </ul>
      <p>
        <i className="ri-earth-fill"></i> {job.location}
      </p>
      <nav>
        <p>
          <img src={job.company_logo} />
        </p>
        <ul>
          <li>{job.company}</li>
          <i className="ri-time-line"></i> {job.created_at}
        </ul>
        <p>{job.description}</p>
      </nav>
    </DetailsWrapper>
  ));

  return (
    <div>
      {eachJobDetails}
      <Link to="/">Go back!</Link>
    </div>
  );
}
