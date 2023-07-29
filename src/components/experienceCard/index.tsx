import React from 'react';
import { styled } from 'styled-components';
import { lightTheme, screenSize } from '../../themes/themes';

const Wrapper = styled.div`
    width: 100%;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 1rem;

    @media (max-width: ${ screenSize.medium }) {
        flex-direction: column;
    }
`

const ContentWrapper = styled.div`
    display: flex;
    margin: 0 1rem 1.5rem 0;
    border-bottom: 0.2rem solid ${ lightTheme.primaryColor };
    max-width: 50rem;
    justify-content: flex-end;
    align-items: flex-end;

    @media (max-width: ${ screenSize.medium }) {
        flex-direction: column;
    }
    `

const DescriptionBox = styled.div`
    display: flex;
    padding: 1rem;
    flex-direction: column;
    height: 100%;
    max-width: 30rem;
    margin-right: auto;
`

const Heading = styled.h5`
    font-family: ${ lightTheme.primaryFont };
    color: ${ lightTheme.textColor }
    font-weight: 800;
    font-size: 32px;
    margin: 0;
`

const SubHeading = styled.p`
    font-family: ${ lightTheme.primaryFont };
    color: ${ lightTheme.tertiaryColor };
    font-weight: 400;
    font-size: 22px;
    margin: 0;
`

const Description = styled.p`
    margin: 1rem auto;
    font-family: ${ lightTheme.primaryFont };
    font-weight: 400;
    font-size: 20px;
`


const Icon = styled.span`
    width: 3rem;
    height: 3rem;
    border-radius: 4rem;
    border: none;
    background-color: ${ lightTheme.primaryColor };
`

const SkillsBox = styled.div`
    background-color: ${ lightTheme.primaryColor };
    width: 50%;
    max-width: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    @media (max-width: ${ screenSize.medium }) {
        max-width: 95%;
        width: fit-content;
        flex-flow: row wrap;
    }
`

const SkillTitle = styled.h6`
    font-family: ${ lightTheme.primaryFont };
    color: ${ lightTheme.textColor };
    font-weight: 800;
    font-size: 22px;
    margin: 0.2rem 0.5rem 0 0.2rem;
    width: 100%;
    text-align: right;
    margin-left: 0.5rem;
`

const Skill = styled.p`
    font-family: ${ lightTheme.primaryFont };
    color: ${ lightTheme.textColor };
    font-weight: 400;
    font-size: 18px;
    margin: 0.2rem 0.5rem;
`

const LabelBox = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 0;

    @media (max-width: ${ screenSize.medium }) {
        align-items: flex-start;
        margin-right: 4rem;
    }
`



const ExperienceCard = () => {
    return(
        <Wrapper>
            <span style={{display: "flex", width: "fit-content", alignItems: "flex-end"}}>
            <Icon style={{background: "none"}}/>
            <LabelBox>
                <Heading style={{textAlign: "right"}}>
                    React Intern
                </Heading>
                <SubHeading style={{textAlign: "right"}}>
                    Jun - Aug 2022
                </SubHeading>
            </LabelBox>
            </span>
            <span style={{display: "flex", width: "fit-content", alignItems: "flex-end"}}>
            <Icon/>
            <ContentWrapper>
                <DescriptionBox>
                    <Heading>
                        Sample Experience
                    </Heading>
                    <SubHeading>
                        Chicago
                    </SubHeading>
                    <Description>
                        I worked really hard for several years. Did Amazing things too. Wow crazy.
                    </Description>
                </DescriptionBox>
                <SkillsBox>
                    <SkillTitle>
                        Skills Used
                    </SkillTitle>
                    <Skill>
                        Python
                    </Skill>
                    <Skill>
                        Python
                    </Skill>
                    <Skill>
                        Python
                    </Skill>
                    <Skill>
                        Python
                    </Skill>
                </SkillsBox>
            </ContentWrapper>
            </span>
        </Wrapper>
    );
}

export default ExperienceCard;