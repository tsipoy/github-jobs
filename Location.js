import React from 'react'

export default function Location() {
    return (
        <div>
            <input type="checkbox" /> Full time
            <label>Location 
                <input type="text" placeholder=" City, state, zip code or country"/>
                <input type="checkbox" /> London
                <input type="checkbox" /> Amsterdam
                <input type="checkbox" /> New York
                <input type="checkbox" /> Berlin
            </label>
        </div>
    )
}
