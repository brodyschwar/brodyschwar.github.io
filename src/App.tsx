import React from 'react';
import SquareButton from './components/buttons/SquareButton';
import './App.css';
import Header from './components/header';
import ProjectCard from './components/projectCard';
import { CAR_POOL_PROJECT } from './data/projects';
import TitleSection from './components/titleSection';
import { MAIN_TITLE } from './data/titleSections';
import AboutMe from './components/aboutSection';
import ExperienceCard from './components/experienceCard';
import { ExperienceCardProps } from './components/experienceCard';

const sampleProp: ExperienceCardProps = {
  position: "React Intern",
  dates: "Jun - Aug 2022",
  company: "Bounteous",
  location: "Chicago",
  description: "Worreasa adadlkajdla a asdjl a sdlja aldkasjdlka adjskdjalkdja a aldkaklda a sakd a ad s a adskdjal a adklasjsdklasj aldkjsd alkj lskaj  adlja lkdj akls djlasd kada  alkdjsdlk jalkajd a adlks klaad.",
  skills: ["React", "Redux", "CSS"]
}

const sampleProp2: ExperienceCardProps = {
  position: "Full Stack Intern",
  dates: "Jun - Aug 2023",
  company: "Caxy",
  location: "Chicago",
  description: "Worreasa adadlkajdla a asdjl a sdlja aldkasjdlka adjskadklasjsdklasj aldkjsd alkj lskaj  adlja lkdj akls djlasd kada  alkdjsdlk jalkajd a adlks klaad.",
  skills: ["React", "Scala", "Graphql"]
}

function App() {
  return (
    <>
    <div className="App">
      <TitleSection {...MAIN_TITLE}/>
      <AboutMe/>
      <ExperienceCard {...sampleProp}/>
      <ExperienceCard {...sampleProp2}/>
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
