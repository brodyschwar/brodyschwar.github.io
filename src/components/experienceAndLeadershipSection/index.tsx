import React from 'react';
import { styled } from 'styled-components';
import { lightTheme, screenSize } from '../../themes/themes';
import { EXPERIENCE } from '../../data/experience';
import ExperienceCard from '../experienceCard';

const Wrapper = styled.div`
  background-color: ${lightTheme.backgroundColor};
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const DescriptionWrapper = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 2rem 3fr;
`

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  margin-top: 0.2rem;

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

const Icon = styled.span`
    position: absolute;
    top: -0.2rem;
    width: 0;
    height: 0;
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-bottom: 1rem solid ${lightTheme.tertiaryColor};
`;

const Header = styled.h2`
    font-family: ${ lightTheme.primaryFont };
    color: ${ lightTheme.textColor };
    font-size: 36px;
    font-weight: 800;

    @media (max-width: ${ screenSize.medium }) {
        font-size: 30px;
    }

    @media (max-width: ${ screenSize.small }) {
        font-size: 24px;
    }
`

const Description = styled.div`
    width: 50%;
    margin-bottom: 1rem;
    font-family: ${ lightTheme.primaryFont };
    font-weight: 400;
    font-size: 20px;
    min-width: 20rem;
    max-width: 50rem;
    color: ${ lightTheme.textColor };
`

const description: string = "Check out my experience"

const ExperienceAndLeadershipSection = () => {
    return(
        <Wrapper>
            <DescriptionWrapper>
                <div/>
                <IconWrapper>
                    <Icon/>
                </IconWrapper>
                <div>
                <Header>
                    Experience and Leadership
                </Header>
                <Description>
                    {description}
                </Description>
                </div>
            </DescriptionWrapper>
            {EXPERIENCE.map((experience) => (
                <ExperienceCard key={experience.company} {...experience}/>
            ))}
        </Wrapper>
    );
}

export default ExperienceAndLeadershipSection;