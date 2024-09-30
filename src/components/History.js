import React from "react";

function History({ history, goTo }) {
  return (
    <div className="history">
      <h4>History</h4>
      <ul>
        {history.map((item, index) => {
          const description =
            index === 0 ? "Go to game start" : `Go to move #${index}`;
          return (
            <li key={index}>
              <button onClick={() => goTo(index)}>{description}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default History;
