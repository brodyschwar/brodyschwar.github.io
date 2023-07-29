import React from 'react';
import { styled } from 'styled-components';
import { lightTheme, screenSize } from '../../themes/themes';

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
  grid-template-columns: 1fr 2rem 3fr;
  align-items: flex-start;
  @media (max-width: ${screenSize.medium}) {
    flex-direction: column;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;

  position: relative; /* Set to relative for positioning pseudo-element */
  z-index: 1;
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

const ContentWrapper = styled.div`
  display: flex;
  margin: 0 1rem 1rem 0;
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
`

const Description = styled.p`
    margin: 1rem auto;
    font-family: ${ lightTheme.primaryFont };
    font-weight: 400;
    font-size: 20px;

    @media (max-width: ${ screenSize.medium }) {
        font-size: 16px;
    }
`


const Icon = styled.span`
    width: 2rem;
    height: 2rem;
    border-radius: 4rem;
    border: none;
    min-width: 2rem;
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
    display: flex;
    flex-direction: column;
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
return (
    <Wrapper>
        <LabelBox>
        <Heading style={{ textAlign: 'right' }}>{position}</Heading>
        <SubHeading style={{ textAlign: 'right' }}>{dates}</SubHeading>
        </LabelBox>
        <IconWrapper>
        <Icon />
        </IconWrapper>
        <ContentWrapper>
        <DescriptionBox>
            <Heading>{company}</Heading>
            <SubHeading>{location}</SubHeading>
            <Description>{description}</Description>
        </DescriptionBox>
        <SkillsBox>
            <SkillTitle>SKILLS USED</SkillTitle>
            {skills.map((skill) => (
            <Skill key={skill} children={skill} />
            ))}
        </SkillsBox>
        </ContentWrapper>
    </Wrapper>
);
};
  

export default ExperienceCard;