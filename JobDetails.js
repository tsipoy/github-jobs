import React, {useState, useEffect, useParams} from 'react';
import { Link } from 'react-router-dom';

const endPoint = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";

const details = "?page=1&search=code";

export default function JobDetails() {
    const { description } = useParams()
    const [jobDetails, setJobDetails] = useState();

    async function getJobDetails() {
        const response = await fetch(endPoint + description + details);
        const data = await response.json();
        console.log(data);
        setJobDetails(data);
    }

    useEffect(() => {
        getJobDetails();
    }, [])

    const getMoredetails = jobDetails.map(job => (
        <p>{job.description}</p>
    ))

    return (
        <div>
            {getMoredetails}
            <Link to="/">
                Go back!
            </Link>  
        </div>
    )
}
