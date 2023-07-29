import React from 'react';
import SquareButton from './components/buttons/SquareButton';
import './App.css';
import Header from './components/header';
import ProjectCard from './components/projectCard';
import { CAR_POOL_PROJECT } from './data/projects';
import TitleSection from './components/titleSection';
import { MAIN_TITLE } from './data/titleSections';
import AboutMe from './components/aboutSection';
import ExperienceAndLeadershipSection from './components/experienceAndLeadershipSection';

function App() {
  return (
    <>
    <div className="App">
      <TitleSection {...MAIN_TITLE}/>
      <AboutMe/>
      <ExperienceAndLeadershipSection/>
      <SquareButton primary>Test Primary</SquareButton>
      <SquareButton secondary>Test Seconday</SquareButton>
      <SquareButton tertiary>Test Tertiary</SquareButton>
      <ProjectCard {...CAR_POOL_PROJECT}/>
      <ProjectCard reverse {...CAR_POOL_PROJECT}/>
    </div>
    </>
  );
}

export default App;
