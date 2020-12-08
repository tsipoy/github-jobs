import React, {useContext} from "react";
import {Context} from "./Context"

import ListOfJobs from "./ListsOfJob";
import Header from "./Header";
import Location from "./Location";

import styled from "styled-components";

const DivWrapper = styled.div`
  padding-inline-start: 19px;
  padding-inline-end: 12px;
`;

export default function App() {
    const { isLoaded } = useContext(Context);
  return (
    <DivWrapper>
      <Header />
      {isLoaded ? (
        "Loading ..."
      ) : (
        <div>
          <Location />
          <ListOfJobs />
        </div>
      )}
    </DivWrapper>
  );
}
