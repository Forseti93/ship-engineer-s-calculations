import React, { useContext } from "react";
import Cell from "./Cell";
import { BunkeringContext } from "./BunkeringContext";
import H3 from "../H3";
import { ITable } from "./interfaces";

const Table = () => {
  const context = useContext(BunkeringContext);

  const thTags = (headers?: ITable["columnsHeaders"]) =>
    headers?.map((header, headerId) => {
      return <th key={headerId}>{header}</th>;
    });

  const trTdTags = (rows?: ITable["rows"]): JSX.Element => {
    return (
      <>
        {rows?.map((row, rowNum) => {
          return (
            <tr id={`${rowNum}`} key={rowNum}>
              {row.map((cell, collNum) => {
                if (collNum === 0) {
                  return <td key={`${rowNum};${collNum}`}>{rowNum + 1}</td>;
                } else {
                  return (
                    <Cell
                      id={`${rowNum};${collNum}`}
                      value={cell}
                      key={`${rowNum};${collNum}`}
                    />
                  );
                }
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

  return context?.state !== undefined ? (
    <table>
      <thead>
        <tr>{thTags(context?.state.columnsHeaders)}</tr>
      </thead>
      <tbody>{trTdTags(context?.state.rows)}</tbody>
    </table>
  ) : (
    <H3>Table is empty</H3>
  );
};

export default Table;
