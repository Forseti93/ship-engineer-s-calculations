import React, { useRef } from "react";
import { ICell, ICellId } from "./interfaces";

const Cell = ({ id, value, isActive, onClick, onChange }: ICell) => {
  const input = useRef<null>(null);
  const styleForTd = {
    padding: 0,
    margin: 0,
    width: "fit-content",
    outline: "2px solid black",
    outlineOffset: "-2px",
  };

  function cellChangeHandler(e: any) {
    onChange(e.target.value);
  }

  const handleClick = (e: any) => {
    onClick();
    console.log(input.current);
  };

  return (
    <td
      onClick={(e) => handleClick(e)}
      id={id}
      style={isActive ? styleForTd : {}}
    >
      {isActive ? (
        <input
          autoFocus={true}
          type="number"
          onChange={cellChangeHandler}
          value={value}
          size={`${value}`.length}
          style={{
            padding: 0,
            margin: 0,
            height: "100%",
            width: (`${value}`.length + 1) * 8 + 24 + `px`,
            border: "none",
          }}
        />
      ) : (
        <span>{value}</span>
      )}
    </td>
  );
};

export default Cell;
