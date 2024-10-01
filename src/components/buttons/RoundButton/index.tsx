import React from 'react';
import { styled } from 'styled-components';
import { lightTheme } from '../../../themes/themes';

const RoundButton = styled.button`
    margin: 0;
    padding: 0.1rem 0.3rem;
    border-radius: 10rem;
    background-color: transparent;
    border: 0.1rem solid transparent;

    font-family: ${lightTheme.primaryFont };
    font-size: 18px;
    font-weight: 400;

    text-align: right;

    &:hover {
        border: 0.2rem solid ${ lightTheme.tertiaryColor };
        font-weight: 800;
    }

    &:active {
        color: ${ lightTheme.tertiaryColor };
    }
`

export default RoundButton;