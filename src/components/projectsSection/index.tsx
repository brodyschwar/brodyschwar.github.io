import React from 'react';
import { styled } from 'styled-components';
import { lightTheme } from '../../themes/themes';
import { PROJECTS } from '../../data/projects';
import ProjectCard from '../projectCard';
import TitleBar from '../titleBar';

const Wrapper = styled.div`
    width: calc(100% - 1rem);
    background-color: ${lightTheme.primaryColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0.5rem;
`;

const ProjectSection = () => {
    return (
        <Wrapper>
            <TitleBar title={"Projects"} />
            {PROJECTS.map((project, index) => (
                <ProjectCard
                    key={index}
                    reverse={index % 2 === 1}
                    {...project}
                />
            ))}
        </Wrapper>
    );
};

export default ProjectSection;
