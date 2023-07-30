import React from 'react';
import { styled } from 'styled-components';
import { lightTheme, screenSize } from '../../themes/themes';
import { PROJECTS } from '../../data/projects';
import ProjectCard from '../projectCard';
import TitleBar from '../titleBar';

const Wrapper = styled.div`
    width: 100%;
    background-color: ${ lightTheme.primaryColor };
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ProjectSection = () => {
    return (
        <Wrapper>
            <TitleBar title={"Projects"}/>
            {PROJECTS.map((project, indx) => (
                <ProjectCard reverse={indx % 2 == 0} {...project}/>
            ))}
        </Wrapper>
    );
} 

export default ProjectSection;