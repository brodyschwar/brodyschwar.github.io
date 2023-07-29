import React from 'react';
import { styled } from 'styled-components';
import { lightTheme } from '../../../themes/themes';

const RoundButton = styled.button`
    margin: 0;
    padding: 0.2rem 0.5rem;
    border-radius: 10rem;
    background-color: transparent;
    border: 0.2rem solid transparent;

    font-family: ${lightTheme.primaryFont };
    font-size: 22px;
    font-weight: 400;

    &:hover {
        border: 0.2rem solid ${ lightTheme.tertiaryColor };
        font-weight: 800;
    }

    &:active {
        color: ${ lightTheme.tertiaryColor };
    }
`

export default RoundButton;