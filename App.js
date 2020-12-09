import React, { useContext } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Context } from "./Context";

import ListOfJobs from "./ListsOfJob";
import Header from "./Header";
import Location from "./Location";
import JobDetails from "./JobDetails";

import styled from "styled-components";

const DivWrapper = styled.div`
  padding-inline-start: 19px;
  padding-inline-end: 12px;

  .loading {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
  }

  @media (min-width: 900px) {
    margin: auto;
    max-width: 1000px;

    .contentWrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .loading {
      text-align: end;
    }
  }
`;

export default function App() {
  const { state } = useContext(Context);
  const {isLoaded} = state
  return (
    <DivWrapper>
      <Header />
      <div className="contentWrapper">
        <Location />
        <Router>
          <Switch>
            <Route exact path="/">
              {isLoaded ? (
                <p className="loading">LOADING ...</p>
              ) : (
                <ListOfJobs />
              )}
            </Route>
            <Route path="/description/:description ">
              <JobDetails />
            </Route>
          </Switch>
        </Router>
      </div>
    </DivWrapper>
  );
}
