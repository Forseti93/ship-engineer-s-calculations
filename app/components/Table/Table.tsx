import React, { useMemo, useReducer, useState } from "react";
import { ITable } from "./interfaces";
import { CTable } from "./CTable";
import H3 from "../H3";
import Cell from "./Cell";
import { twoObjectsSame } from "../usefulFunctions";
import { table } from "console";
// import tableReducer from "./reducer";

const Table = (props: ITable) => {
  // const [tableState, dispatch] = useReducer(tableReducer, {} as ITable);
  /*TODO: 
  +props came here
  -props went to local storage (add rows)
  -data from local storage is used to draw table
  -if user change table from UI, it changes local storage  */
  const returnThTags = (data: CTable) => {
    return data.table.columnsHeaders.map((columnHeader: string, i: number) => {
      return (
        <th>
          <Cell value={columnHeader} id={i} key={`ht_${i}`} />
        </th>
      );
    });
  };

  const returnTdTags = (table: CTable) => {
    const tdTags = [];
    for (let col = 1; col <= table.columnsCounter; col++) {
      tdTags.push(
        <td>
          <Cell value={`${col}`} id={col} />
        </td>
      );
    }
    return tdTags;
  };

  const addTableToLocSto = (key: string, table: CTable) => {
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, JSON.stringify(table));
    } else {
      const dataInLocStor = localStorage.getItem(key);
      const newData = table;
      if (!twoObjectsSame(dataInLocStor, newData))
        localStorage.setItem(key, JSON.stringify(table));
    }
  };

  const calculateBasicTable = (table: CTable): JSX.Element => {
    return (
      <table>
        <thead>
          <tr>{returnThTags(table)}</tr>
        </thead>
        <tbody>
          <tr>{returnTdTags(table)}</tr>
        </tbody>
      </table>
    );
  };

  let table: CTable = new CTable(props);

  if (typeof window !== "undefined") {
    const key = "bunkering_table";
    addTableToLocSto(key, table);
  }

  if (props.isLoading) {
    return <H3>Table is loading...</H3>;
  } else {
    return <>{calculateBasicTable(table)}</>;
  }
};

export default Table;
