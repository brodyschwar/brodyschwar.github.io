import React from 'react';
import SquareButton from './components/buttons/SquareButton';
import './App.css';
import Header from './components/header';
import ProjectCard from './components/projectCard';
import { CAR_POOL_PROJECT } from './data/projects';

function App() {
  return (
    <>
    <Header/>
    <div className="App">
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
