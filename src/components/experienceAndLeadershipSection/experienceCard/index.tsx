import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import { lightTheme, screenSize } from '../../../themes/themes';
import AOS from "aos";
import "aos/dist/aos.css";
import Aos from 'aos';

export interface ExperienceCardProps {
    position: string,
    company: string,
    dates: string,
    location: string,
    description: string,
    skills: string[],
}

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: minmax(4rem, 4fr) 2rem 10fr;
`;

const ContentWrapper = styled.div`
  display: flex;
  margin: 0 1rem 1rem 0;
  padding-top: 1rem;
  border-bottom: 0.2rem solid ${lightTheme.primaryColor};
  max-width: 50rem;
  justify-content: flex-end;
  align-items: flex-end;

  @media (max-width: ${screenSize.medium}) {
    flex-direction: column;
  }
`;

const DescriptionBox = styled.div`
    display: flex;
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

    @media (max-width: ${ screenSize.medium }) {
        font-size: 24px;
    }

    @media (max-width: ${ screenSize.xsmall }) {
        font-size: 14px;
    }
`

const SubHeading = styled.p`
    font-family: ${ lightTheme.primaryFont };
    color: ${ lightTheme.tertiaryColor };
    font-weight: 400;
    font-size: 22px;
    margin: 0;

    @media (max-width: ${ screenSize.medium }) {
        font-size: 18px;
    }

    @media (max-width: ${ screenSize.xsmall }) {
        font-size: 14px;
    }
`

const Description = styled.p`
    margin: 1rem auto;
    font-family: ${ lightTheme.primaryFont };
    font-weight: 400;
    font-size: 20px;

    @media (max-width: ${ screenSize.medium }) {
        font-size: 16px;
    }

    @media (max-width: ${ screenSize.xsmall }) {
        font-size: 12px;
    }
`

const Icon = styled.span`
    width: 2rem;
    height: 2rem;
    border-radius: 4rem;
    border: none;
    background-color: ${ lightTheme.primaryColor };
    margin-top: auto;
`

const SkillsBox = styled.div`
    background-color: ${ lightTheme.primaryColor };
    width: fit-content;
    padding-left: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    @media (max-width: ${ screenSize.medium }) {
        max-width: calc(100% - 1rem);
        width: fit-content;
        flex-flow: row wrap;
        padding-left: 0;
    }
`

const Skill = styled.p`
    font-family: ${ lightTheme.primaryFont };
    color: ${ lightTheme.textColor };
    font-weight: 400;
    font-size: 18px;
    margin: 0.2rem 0.5rem;
    text-align: right;

    @media (max-width: ${ screenSize.xsmall }) {
        font-size: 14px;
    }
`
const LabelBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-top: 1rem;
`

const VeticalLine = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;

  position: relative; /* Set to relative for positioning pseudo-element */
  z-index: 0;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0.9rem; /* Adjust the left position to center the line */
    width: 0.2rem;
    background-color: ${lightTheme.tertiaryColor}; /* Set the color of the line */
    z-index: -1;
  }
`;

const IconWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;
`

const ExperienceCard: React.FC<ExperienceCardProps> = ({
    position,
    company,
    dates,
    location,
    description,
    skills,
}) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <Wrapper>
            <LabelBox data-aos="fade-up">
                <Heading style={{ textAlign: 'right' }}>{position}</Heading>
                <SubHeading style={{ textAlign: 'right' }}>{dates}</SubHeading>
            </LabelBox>
            <VeticalLine>
                <IconWrapper data-aos="fade-up">
                    <Icon/>
                </IconWrapper>
            </VeticalLine>
            <ContentWrapper data-aos="fade-up">
                <DescriptionBox>
                    <Heading>{company}</Heading>
                    <SubHeading>{location}</SubHeading>
                    <Description>{description}</Description>
                </DescriptionBox>
                <SkillsBox>
                    {skills.map((skill) => (
                    <Skill key={skill} children={skill} />
                    ))}
                </SkillsBox>
            </ContentWrapper>
        </Wrapper>
    );
};
  

export default ExperienceCard;