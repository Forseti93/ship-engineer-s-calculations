import React, { useContext, useState } from "react";
import Cell from "./Cell";
import { BunkeringContext } from "../../context/BunkeringContext";
import H3 from "../H3";
import { ICellId, ITable } from "./interfaces";
import { EACTIONS } from "./reducerTable";

const Table = () => {
  const context = useContext(BunkeringContext);

  const thTags = (headers?: ITable["columnsHeaders"]) =>
    headers?.map((header, headerId) => {
      return <th key={headerId}>{header}</th>;
    });
  // TODO: make a component
  const trTdTags = (rows?: ITable["rows"]): JSX.Element => {
    const [activeId, setActiveId] = useState<null | string>(null);

    const handleCellClick = (id: string) => {
      console.log(id);
      setActiveId(id);
    };

    const handleCellChange = (value: number, cellId: ICellId) => {
      console.log("val: ", value, "cell: ", cellId);
      context?.dispatch({
        type: EACTIONS.CHANGE_VALUE,
        payload: { cellId, value },
      });
    };
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
                      isActive={
                        `${rowNum};${collNum}` === activeId ? true : false
                      }
                      onClick={() => handleCellClick(`${rowNum};${collNum}`)}
                      onChange={(value) =>
                        handleCellChange(value, { row: rowNum, col: collNum })
                      }
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
