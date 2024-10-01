import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import { lightTheme, screenSize } from '../../themes/themes';
import ProjectImage from './projectImage';
import SquareButton from '../buttons/SquareButton';
import { ButtonProps, ImageProps } from '../../data/types';
import AOS from "aos";
import "aos/dist/aos.css";

export interface ProjectCardProps {
    reverse?: boolean,
    projectTitle: string,
    skills: string[],
    description: string,
    buttonProps?: ButtonProps,
    img: ImageProps
}

const Wrapper = styled.div<{ $isreverse: boolean }>`
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    padding: 1rem 0;

    @media (max-width: ${ screenSize.medium }) {
        flex-direction: ${ props => props.$isreverse ? 'column-reverse' : 'column'};
        align-items: center;
        margin-bottom: 3rem;
    }
`

const CardTitle = styled.h4`
    font-family: ${ lightTheme.primaryFont };
    font-weight: 800;
    color: ${ lightTheme.textColor };
    font-size: 36px;
    margin: 0;
    text-align: right;

    @media (max-width: ${ screenSize.medium }) {
        font-size: 30px;
    }

    @media (max-width: ${ screenSize.small }) {
        font-size: 24px;
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
    margin: 0.5rem 0 1rem 0;
`

const demoSkills: string[] = ["python", "c#", "google-sheets"]

const ProjectCard: React.FC<ProjectCardProps> = ({reverse, projectTitle, skills, description, img, buttonProps}) => {
    const isReverse: boolean = !!reverse;
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <Wrapper data-aos="fade-up" $isreverse={isReverse}>
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
                { !!buttonProps && <SquareButton onClick={buttonProps.clickHandler} tertiary>
                    {buttonProps.label}
                </SquareButton>}
            </InfoSection>
            { isReverse && <ProjectImage {...img}/>}
        </Wrapper>
    );
}

export default ProjectCard