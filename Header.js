import React from 'react';
import styled from "styled-components";

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
    return (
        <HeaderStyle>
            <h1>Github Jobs</h1>
            <form>
                <input type="text" placeholder="Title, companies, experti..." />
                <button>Search</button>
            </form>
        </HeaderStyle>
    )
}
