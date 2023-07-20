import React from 'react';
import SquareButton from './components/buttons/SquareButton';
import './App.css';
import Header from './components/header';

function App() {
  return (
    <>
    <Header/>
    <div className="App">
      <SquareButton primary>Test Primary</SquareButton>
      <SquareButton secondary>Test Seconday</SquareButton>
      <SquareButton tertiary>Test Tertiary</SquareButton>
    </div>
    </>
  );
}

export default App;
