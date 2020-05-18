import React, { Component } from 'react';
import Board from '../components/Tac'
import CalculateWinner from '../components/calculatethewinner'

class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
          
           
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
       
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
export default Game
  