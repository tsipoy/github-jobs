import React, {useContext} from 'react';
import styled from "styled-components";
import {Context} from "./Context"
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
    const { inputValue, setInputValue } = useContext(Context);

    return (
        <HeaderStyle>
            <h1>Github Jobs</h1>
            <form>
                <input 
                    type="text"
                    value={inputValue}
                    onChange={setInputValue} 
                    placeholder="Title, companies, experti..." />
                <button>Search</button>
            </form>
        </HeaderStyle>
    )
}
