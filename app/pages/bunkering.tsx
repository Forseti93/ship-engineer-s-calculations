import React, { useReducer } from "react";
import styles from "../styles/Bunkering.module.scss";
import Table from "../components/Table/Table";
import { tableReducer } from "../components/Table/reducer";

const Bunkering = () => {
  const [state, dispatch] = useReducer(tableReducer, {
    columnsHeaders: [
      "",
      "Tank",
      "Grade",
      "ULG",
      "Quantity (CBM)",
      "Density of fuel at 15C",
      "Temperature",
      "Corrected density",
      "Quantity (MT)",
    ],
    rows: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  });
  const tableKey = "bunkering_table";
  // TODO: add context -> https://youtu.be/ZKlXqrcBx88?t=275
  // TODO: add dispatch to the cell. cell clicked, state changed.
  // TODO: edit reducer to update cell value -> https://github.com/gitdagray/usereducer_tut/blob/main/src/App.js

  return (
    <div className={styles.bunkering}>
      <Table columnsHeaders={state.columnsHeaders} rows={state.rows} />
    </div>
  );
};

export default Bunkering;
