import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import First from './components/First'
import Square from './components/Tic'
import Board from './components/Tac'
import Game from './components/Game'
import CalculateWinner from './components/calculatethewinner'
import './App.css';

function App() {
  return (
    <div className="App">
    <First />
    <Square />
    <Board />
    <Game />
    <CalculateWinner />
    </div>
  );
}

export default App;
