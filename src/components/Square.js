import React from "react";

function Square({ val, handleClick }) {
  return (
    <button className={"square"} onClick={handleClick}>
      {val}
    </button>
  );
}

export default Square;
