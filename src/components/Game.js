import React, { useState, useEffect } from "react";
import Board from "./Board";
import History from "./History";

function Game() {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
    },
  ]);
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);

  //Declaring a Winner
  useEffect(() => {
    const newWinner = calculateWinner(history[history.length - 1].squares);
    setWinner(newWinner);
  }, [history]);

  //function to check if a player has won.
  //If a player has won, we can display text such as “Winner: X” or “Winner: O”.
  //Input: squares: given an array of 9 squares:'X', 'O', or null.
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  //Handle player
  const handleClick = (i) => {
    const newHistory = [...history]; // Copy all history to a new array
    const newSquares = [...newHistory[currentStep].squares]; // Copy all array squares to a new array

    // Stop the game
    if (newSquares[i] || calculateWinner(newSquares)) return;

    // Set value for clicked item
    newSquares[i] = xIsNext ? "X" : "O";

    // Add new squares to array history
    setHistory(
      newHistory.concat([
        {
          squares: newSquares,
        },
      ])
    );

    // Update states
    setCurrentStep(newHistory.length);
    setXIsNext(1 - xIsNext);
  };

  //Go to a specify step
  const goTo = (step) => {
    setCurrentStep(step);
    setXIsNext(step % 2 === 0);
  };

  //Restart game
  const handlRestart = () => {
    setXIsNext(true);
    setHistory([
      {
        squares: Array(9).fill(null),
      },
    ]);
    setCurrentStep(0);
  };

  return (
    <div className="main">
      <h2 className="result">Winner is: {winner ? winner : "N/N"}</h2>
      <div className="game">
        <span className="player">Next player is: {xIsNext ? "X" : "O"}</span>
        <div className="wrapper">
          <Board
            squares={history[currentStep].squares}
            handleClick={handleClick}
          />
          <History history={history} goTo={goTo} />
        </div>
      </div>
      <button onClick={handlRestart} className="restart-btn">
        Restart
      </button>
    </div>
  );
}

export default Game;
