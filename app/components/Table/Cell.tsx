import React from "react";

const Cell = ({ id, value }: ICell) => {
  return <td id={id}>{value}</td>;
};

export default Cell;
