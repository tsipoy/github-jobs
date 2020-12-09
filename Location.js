import React, {useContext} from 'react';
import styled from 'styled-components';
import { Context } from './Context';

const FormStyle = styled.form `
    display: flex;
    flex-direction: column;

    label {
        padding-block-end: 32px;
    }

    .locationLabel {
        font-weight: bold;
        font-size: 14px;
        line-height: 21px;
        text-transform: uppercase;
        color: #B9BDCF;
    }

    .citySearch {
        border: none;
        background-color: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
        padding: 16px;
    }
`;
export default function Location() {
    const {state, dispatch} = useContext(Context);
    const {isChecked, jobs} = state
    
    return (
        <FormStyle>
            <label>Full time
                <input type="checkbox" />
            </label>
            <label className="locationLabel">Location</label> 
            <label>
                <input type="text" placeholder=" City, state, zip code or country" className="citySearch"/>
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
