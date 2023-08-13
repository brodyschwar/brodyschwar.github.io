import React, { useRef } from 'react';
import './App.css';
import TitleSection from './components/titleSection';
import { MAIN_TITLE } from './data/titleSections';
import AboutMe from './components/aboutSection';
import ExperienceAndLeadershipSection from './components/experienceAndLeadershipSection';
import ProjectSection from './components/projectsSection';

function App() {
  const projectRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  const handleProjectsClick = () => {
    projectRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExperienceClick = () => {
    experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const [linkeInButton, resumeButton, resturauntButton] = MAIN_TITLE.buttons

  const navButtons = [ linkeInButton, resumeButton, { label: "Projects", clickHandler: handleExperienceClick }, { label: "Experience", clickHandler: handleExperienceClick }, resturauntButton]

  return (
    <>
    <div className="App">
      <TitleSection {...MAIN_TITLE} buttons={navButtons}/>
      <AboutMe/>
      <div ref={projectRef}/>
      <ProjectSection/>
      <div ref={experienceRef}/>
      <ExperienceAndLeadershipSection/>
    </div>
    </>
  );
}

export default App;
