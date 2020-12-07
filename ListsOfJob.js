import React, {useContext} from 'react';
import { Context } from "./Context";
import styled from "styled-components";

const MainContent = styled.div`
    display: flex;
    flex-dirextion: row;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    margin-block-end: 23px;
    margin-block-start: 23px;
    
    nav {
        margin-block-start: -20px;
        padding-inline-start: 50px;
    }

    ul {
        padding-inline-start: 0;
    }

    li {
        list-style: none;
    }

    img {
        width: 100px;
        height: 100px;
    }
`;

// const DivWrapper = styled.div `
//     background-color: #FFFFFF;
//     box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
//     border-radius: 4px;
//     margin-block-end: 23px;
//     margin-block-start: 23px;
// `;

export default function ListsOfJob() {
    const { jobs } = useContext(Context);

    //logo, company name, job, full time, place, created
    const allJobs = jobs.map(job => (
        <MainContent key={job.id}>
            <img src={job.company_logo} />
            <nav>
                <ul>
                    <li>{job.company}</li>
                    <li>{job.title}</li>
                    <li>{job.type}</li>
                </ul>
                <ul>
                    <li>{job.location}</li>
                    <li>{job.created_at}</li>
                </ul>
            </nav>
        </MainContent>
    ))
    return (
        <div>
            {allJobs}
        </div>
    )
}
