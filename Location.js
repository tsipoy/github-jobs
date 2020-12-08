import React from 'react';
import styled from 'styled-components';
import { Context } from './Context';

const FormStyle = styled.form `
    display: flex;
    flex-direction: column;

    label {
        padding-block-end: 32px;
    }
`;
export default function Location() {
    const {state, dispatch} = useContext(Context);
    
    return (
        <FormStyle>
            <label>Full time
                <input type="checkbox" />
            </label>
            <label>Location</label> 
            <label>
                <input type="text" placeholder=" City, state, zip code or country"/>
            </label>
            <label>London 
                <input type="checkbox" /> 
            </label>
            <label>Amsterdam 
                <input type="checkbox" /> 
            </label>
            <label>New York 
                <input type="checkbox" />
            </label>
            <label>Berlin 
                <input type="checkbox" /> 
            </label>
        </FormStyle>
    )
}
