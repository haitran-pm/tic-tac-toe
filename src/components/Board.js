import Square from "./Square";

export default function Board({ squares, handleClick, goTo }) {
  return (
    <div className="board">
      <div>
        <div className="board-row">
          <Square val={squares[0]} handleClick={() => handleClick(0)} />
          <Square val={squares[1]} handleClick={() => handleClick(1)} />
          <Square val={squares[2]} handleClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square val={squares[3]} handleClick={() => handleClick(3)} />
          <Square val={squares[4]} handleClick={() => handleClick(4)} />
          <Square val={squares[5]} handleClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square val={squares[6]} handleClick={() => handleClick(6)} />
          <Square val={squares[7]} handleClick={() => handleClick(7)} />
          <Square val={squares[8]} handleClick={() => handleClick(8)} />
        </div>
      </div>
    </div>
  );
}
