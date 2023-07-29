import React from 'react';
import { styled } from 'styled-components';
import { lightTheme, screenSize } from '../../themes/themes';
import StatsListing, { StatsListingProps } from './statsListing';
import HorizontalLine from '../horizontalLine';

const Wrapper = styled.div`
    width: 100%;
    padding: 0.5rem;
    display: flex;
    background-color: ${ lightTheme.backgroundColor };
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

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
    width: 30%;
    min-width: 15rem;
    font-family: ${ lightTheme.primaryFont };
    font-size: 36px;
    font-weight: 800;
    text-align: center;

    @media (max-width: ${ screenSize.medium }) {
        font-size: 30px;
        min-width: 12rem;
    }

    @media (max-width: ${ screenSize.small }) {
        font-size: 24px;
        min-width: 8rem;
    }
`

const InfoWrapper = styled.div`
    display: flex;
    width: 80%;
    flex-flow: row-reverse wrap;
    align-items: center;
    justify-content: center;
`

const StatsFeild = styled.div`
    width: 100%;
    max-width: 30rem;
    min-width: 12rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 1rem;
`

const StatsTitle = styled.h6`
    font-family: ${ lightTheme.primaryFont };
    font-weight: 800;
    text-align: center;
    margin: 0;
    font-size: 20px;
`

const Description = styled.div`
    width: 50%;
    margin: 1rem auto;
    font-family: ${ lightTheme.primaryFont };
    font-weight: 400;
    font-size: 20px;
    min-width: 20rem;
    max-width: 50rem;
    text-align: center;
    color: ${ lightTheme.textColor };
`

const sampleStatsData: StatsListingProps[] = [
    {feild: "Name", stat: "Brody Schwartz"},
    {feild: "Age", stat: "21"},
    {feild: "Pronouns", stat: "He/Him"},
    {feild: "Degree", stat: "B.S. Computer Science"},
    {feild: "Minors", stat: "Mathematics, Philosophy"}
];
const AboutMe = () => {
    return(
        <Wrapper>
            <HeaderBar>
                <HeaderLine/>
                <Header>
                    About Me
                </Header>
                <HeaderLine/>
            </HeaderBar>
            <InfoWrapper>
                <Description>
                    Hi! I am a soon to be graduate of the University of Michigan, majoring in Computer Science and minoring in Mathematics and Philosophy.
                </Description>
                <StatsFeild>
                    <StatsTitle> 
                        STATS 
                    </StatsTitle>
                    {sampleStatsData.map((stats) => (
                        <StatsListing {...stats}/>
                    ))}
                    <HorizontalLine/>
                </StatsFeild>
            </InfoWrapper>
        </Wrapper>
    );
}

export default AboutMe;