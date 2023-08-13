import React, { useRef } from 'react';
import './App.css';
import TitleSection from './components/titleSection';
import { MAIN_TITLE } from './data/titleSections';
import AboutMe from './components/aboutSection';
import ExperienceAndLeadershipSection from './components/experienceAndLeadershipSection';
import ProjectSection from './components/projectsSection';

function App() {
  let ref = useRef(null);

  return (
    <>
    <div className="App">
      <TitleSection {...MAIN_TITLE}/>
      <AboutMe/>
      <ProjectSection/>
      <ExperienceAndLeadershipSection/>
    </div>
    </>
  );
}

export default App;
