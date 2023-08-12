import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import { lightTheme, screenSize } from '../../themes/themes';
import { PROJECTS } from '../../data/projects';
import ProjectCard from '../projectCard';
import TitleBar from '../titleBar';
import AOS from "aos";
import "aos/dist/aos.css";

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
