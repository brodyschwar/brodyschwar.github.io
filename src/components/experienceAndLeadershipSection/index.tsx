import React from 'react';
import { styled } from 'styled-components';
import { lightTheme, screenSize } from '../../themes/themes';
import { EXPERIENCE } from '../../data/experience';
import ExperienceCard from './experienceCard';

const Wrapper = styled.div`
  background-color: ${lightTheme.backgroundColor};
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 100%;
`;

const DescriptionWrapper = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: minmax(4rem, 4fr) 2rem 10fr;
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
    max-width: 100%;

    @media (max-width: ${ screenSize.medium }) {
        font-size: 30px;
    }

    @media (max-width: ${ screenSize.small }) {
        font-size: 20px;
    }
`

const ContentWrapper = styled.div`
    width: 100%;
`

const Description = styled.div`
    width: calc(100% - 1rem);
    margin-bottom: 1rem;
    font-family: ${ lightTheme.primaryFont };
    font-weight: 400;
    font-size: 20px;
    max-width: 60rem;
    color: ${ lightTheme.textColor };

    @media (max-width: ${ screenSize.medium }) {
        font-size: 18px;
    }

    @media (max-width: ${ screenSize.small }) {
        font-size: 16px;
    }
`

const description: string = "I have always pursued experience and leadership within all my endeavors. I am constantly looking to grow and develop, in order to maximize what I can do. Check out how I got the skills I have today."

const ExperienceAndLeadershipSection = () => {
    return(
        <Wrapper>
            <DescriptionWrapper>
                <div/>
                <IconWrapper>
                    <Icon/>
                </IconWrapper>
                <ContentWrapper>
                <Header>
                    Experience and Leadership
                </Header>
                <Description>
                    {description}
                </Description>
                </ContentWrapper>
            </DescriptionWrapper>
            {EXPERIENCE.map((experience, indx) => (
                <ExperienceCard key={indx} {...experience}/>
            ))}
        </Wrapper>
    );
}

export default ExperienceAndLeadershipSection;