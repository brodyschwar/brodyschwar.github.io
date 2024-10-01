import React from 'react';
import { styled } from 'styled-components';
import { lightTheme } from '../../themes/themes';


const HorizontalLine = styled.span`
    width: 100%;
    height: 0.2rem;
    padding: 0;
    margin: 0;
    background-color: ${ lightTheme.tertiaryColor };
`

export default HorizontalLine;
