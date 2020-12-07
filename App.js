import React from 'react';

import ListOfJobs from "./ListsOfJob";
import Header from "./Header";
import Location from "./Location"

import styled from "styled-components";

const DivWrapper = styled.div `
    padding-inline-start: 19px;
    padding-inline-end: 12px;

`;

export default function App() {
    return (
        <DivWrapper>
            <Location />
            <Header />
            <ListOfJobs />
        </DivWrapper>
    )
}
