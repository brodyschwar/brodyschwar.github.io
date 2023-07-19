import React from 'react';
import logo from './logo.svg';
import SquareButton from './components/buttons/SquareButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <SquareButton primary>Test Primary</SquareButton>
      <SquareButton secondary>Test Seconday</SquareButton>
      <SquareButton tertiary>Test Tertiary</SquareButton>
    </div>
  );
}

export default App;
