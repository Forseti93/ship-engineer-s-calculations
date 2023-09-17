import React from "react";
import Cell from "./Cell";

const Table = ({ columnsHeaders, rows }: ITable) => {
  const thTags = (headers: ITable["columnsHeaders"]) =>
    headers?.map((header) => {
      return <th>{header}</th>;
    });

  const trTdTags = (rows: ITable["rows"]): JSX.Element => {
    return (
      <>
        {rows.map((row, rowNum) => {
          return (
            <tr id={`${rowNum + 1}`}>
              {row.map((cell, collNum) => {
                return <Cell id={`${rowNum + 1}${collNum + 1}`} value={cell} />;
              })}
            </tr>
          );
        })}
      </>
    );

    /* 
      if all table data is in the one array [1,2,3,...,100500]:

      const columnsCount = columnsHeaders?.length;
      const cellsCount = cellsValues?.length;
      const rowsCount = Math.ceil(cellsCount! / columnsCount!);

      const rows: JSX.Element[] = [];
        let counter = 0;
        for (let row = 0; row < rowsCount; row++) {
          const cells: JSX.Element[] = [];
          for (let cell = 0; cell < columnsCount; cell++) {
            cells.push(<td id={`${counter}`}>{cellsValues[counter]}</td>);
            counter++;
          }
          rows.push(<tr>{cells}</tr>);
        }
        return rows; 
        */
  };

  return (
    <table>
      <thead>
        <tr>{thTags(columnsHeaders)}</tr>
      </thead>
      <tbody>{trTdTags(rows)}</tbody>
    </table>
  );
};

export default Table;
