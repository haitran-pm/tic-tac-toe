import React, { useState } from "react";
import Square from "./Square";

export default function Board({ squares, handleClick }) {
  return (
    <div className="board">
      <div>
        <div className="board-row">
          <Square val={squares[0]} handleClick={handleClick} />
          <Square val={squares[1]} handleClick={handleClick} />
          <Square val={squares[2]} handleClick={handleClick} />
        </div>
        <div className="board-row">
          <Square val={squares[3]} handleClick={handleClick} />
          <Square val={squares[4]} handleClick={handleClick} />
          <Square val={squares[5]} handleClick={handleClick} />
        </div>
        <div className="board-row">
          <Square val={squares[6]} handleClick={handleClick} />
          <Square val={squares[7]} handleClick={handleClick} />
          <Square val={squares[8]} handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
}
