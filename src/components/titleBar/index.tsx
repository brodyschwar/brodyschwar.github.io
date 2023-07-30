import React, { ReactNode } from 'react';
import { styled } from 'styled-components';
import { lightTheme, screenSize } from '../../themes/themes';

const HeaderBar = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    align-items: center;
`
const HeaderLine = styled.span`
    width: 50%;
    height: 0.2rem;
    background-color: ${ lightTheme.tertiaryColor };
    margin: 0.5rem 1rem;
`
const Header = styled.h2`
    min-width: fit-content;
    padding: 0 2rem;
    font-family: ${ lightTheme.primaryFont };
    font-size: 36px;
    font-weight: 800;
    text-align: center;

    @media (max-width: ${ screenSize.medium }) {
        font-size: 30px;
        padding: 0 1rem;
    }

    @media (max-width: ${ screenSize.small }) {
        font-size: 24px;
        padding: 0 0.5rem;
    }
`

const TitleBar: React.FC<{title: string}> = ({title}) => {
    return (
        <HeaderBar>
            <HeaderLine/>
                <Header>
                    {title}
                </Header>
            <HeaderLine/>
        </HeaderBar>
    );
}

export default TitleBar;