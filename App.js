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
`;

export default function App() {
  const { state } = useContext(Context);
  return (
    <DivWrapper>
      <Header />
      <Location />
      {state.isLoaded ? <p className="loading">LOADING ...</p> : <ListOfJobs />}
      {/* <Router>
        <Switch>
          <Route path="/positions/">
            <JobDetails />
          </Route>
        </Switch>
      </Router> */}
    </DivWrapper>
  );
}
