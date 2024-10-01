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

    @media (max-width: ${ screenSize.small }) {
        font-size: 16px;
    }
`

const STATS: StatsListingProps[] = [
    {feild: "Name", stat: "Brody Schwartz"},
    {feild: "University", stat: "University of Michigan"},
    {feild: "Degree", stat: "B.S. Computer Science"},
    {feild: "Minors", stat: "Mathematics, Philosophy"},
    {feild: "Interests", stat: "Chess, Woodworking, Football (bear down), Skiing"}
];

const ABOUT_DESCRIPTION = "Hi! I am Spring 2024 graduate from the University of Michigan with a B.S. in Computer Science. I have completed many acedemic and side projects that I'd love to showcase. Please get to know me through the work I have done!";

const AboutMe = () => {
    return(
        <Wrapper>
            <TitleBar title={"About Me"}/>
            <InfoWrapper>
                <Description>
                    { ABOUT_DESCRIPTION }
                </Description>
                <StatsFeild>
                    <StatsTitle> 
                        STATS 
                    </StatsTitle>
                    {STATS.map((stat, index) => (
                        <StatsListing key={index} {...stat}/>
                    ))}
                    <HorizontalLine/>
                </StatsFeild>
            </InfoWrapper>
        </Wrapper>
    );
}

export default AboutMe;