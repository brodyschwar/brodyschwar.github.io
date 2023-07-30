import React from 'react';
import { styled } from 'styled-components';
import { lightTheme, screenSize } from '../../themes/themes';
import StatsListing, { StatsListingProps } from './statsListing';
import HorizontalLine from '../horizontalLine';
import TitleBar from '../titleBar';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    background-color: ${ lightTheme.backgroundColor };
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 2rem;
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
    max-width: 20rem;
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
    width: 100%;
    margin: 1rem auto;
    font-family: ${ lightTheme.primaryFont };
    font-weight: 400;
    font-size: 20px;
    max-width: 35rem;
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
            <TitleBar title={"About Me"}/>
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