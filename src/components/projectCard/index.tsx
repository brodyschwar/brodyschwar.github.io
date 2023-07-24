import React from 'react';
import { styled } from 'styled-components';
import { lightTheme, screenSize } from '../../themes/themes';
import ProjectImage from './projectImage';
import SquareButton from '../buttons/SquareButton';
import { ImageProps } from '../../data/types';

export interface ProjectCardProps {
    reverse?: boolean,
    projectTitle: string,
    skills: string[],
    description: string,
    buttonLabel: string,
    img: ImageProps
}

const Wrapper = styled.div<{ $isreverse: boolean }>`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0.5rem;

    @media (max-width: ${ screenSize.medium }) {
        flex-direction: ${ props => props.$isreverse ? 'column-reverse' : 'column'};
        align-items: center;
    }
`

const CardTitle = styled.h4`
    font-family: ${ lightTheme.primaryFont };
    font-weight: 800;
    font-size: 36px;
    color: ${ lightTheme.textColor };
    margin: 0;
    text-align: right;

    @media (max-width: ${ screenSize.small }) {
        font-size: 30px;
    }
`

const SkillTag = styled.h6`
    font-family: ${ lightTheme.primaryFont };
    font-size: 22px;
    font-weight: 200;
    margin: 0;
    color: ${ lightTheme.textColor };

    @media (max-width: ${ screenSize.small }) {
        font-size: 18px;
    }
`

const InfoSection = styled.div`
    display: flex;
    width: 100%;
    max-width: 30rem;
    flex-direction: column;
    align-items: flex-end;
    padding: 0;
    margin: 0.5rem;
`

const Description = styled.p`
    font-family: ${ lightTheme.primaryFont };
    font-size: 16px;
    text-align: right;
    margin: 0 0 1rem 0;
`
const Spacer = styled.span`
    height: 0.2rem;
    width: 70%;
    background-color: ${ lightTheme.tertiaryColor };
    margin: 0.5rem 0 2rem 0;
`

const demoSkills: string[] = ["python", "c#", "google-sheets"]

const ProjectCard: React.FC<ProjectCardProps> = ({reverse, projectTitle, skills, description, buttonLabel, img}) => {
    const isReverse: boolean = !!reverse;
    return (
        <Wrapper $isreverse={isReverse}>
            { !isReverse && <ProjectImage {...img}/>}
            <InfoSection>
                <CardTitle>
                    {projectTitle}
                </CardTitle>
                <Spacer/>
                { skills.map((skill) => (
                    <SkillTag key={skill}>
                        {skill}
                    </SkillTag>
                ))}
                <Spacer style={ { width: "20%" } }/>
                <Description>
                    {description}
                </Description>
                <SquareButton primary>
                    {buttonLabel}
                </SquareButton>
            </InfoSection>
            { isReverse && <ProjectImage {...img}/>}
        </Wrapper>
    );
}

export default ProjectCard;