import React, { useEffect, useReducer } from "react";
import styles from "../styles/Bunkering.module.scss";
import Table from "../components/Table/Table";
import { tableReducer } from "../components/Table/reducer";
import { BunkeringContext } from "../components/Table/BunkeringContext";
import { ITable } from "../components/Table/interfaces";

const locStorTableKey = "bunkering_table";

const templateState: ITable = {
  columnsHeaders: [
    "Row №",
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
    [1, 1, 2, 3, 4, 5, 6, 7, 8],
    [2, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 0, 0, 0, 0, 0, 0, 0, 0],
    [4, 0, 0, 0, 0, 0, 0, 0, 0],
    [5, 0, 0, 0, 0, 0, 0, 0, 0],
    [6, 0, 0, 0, 0, 0, 0, 0, 0],
    [7, 0, 0, 0, 0, 0, 0, 0, 0],
    [8, 0, 0, 0, 0, 0, 0, 0, 0],
    [9, 0, 0, 0, 0, 0, 0, 0, 0],
    [10, 0, 0, 0, 0, 0, 0, 0, 0],
    [11, 1, 2, 3, 4, 5, 6, 7, 8],
  ],
};

const addStateToLocalStorage = (state: any, key: any) => {
  if (typeof window == "undefined") return;

  const stringified = JSON.stringify(state);
  window.localStorage.setItem(key, stringified);
};

const isStateInLocalStorage = (key: any) => {
  if (typeof window == "undefined") return;
  return !!window.localStorage.getItem(key);
};

const takeStateFromLocalStorage = (key: any): ITable => {
  const stateStringified = window.localStorage.getItem(key);
  const parsed = JSON.parse(stateStringified!);
  return parsed;
};

// take state from local storage or take initial state
const initialState = (): ITable => {
  if (typeof window == "undefined") return templateState;

  if (!isStateInLocalStorage(locStorTableKey)) {
    return templateState;
  } else {
    return takeStateFromLocalStorage(locStorTableKey);
  }
};

const Bunkering = () => {
  const [state, dispatch] = useReducer(tableReducer, initialState());

  // if state changed - update local storage
  useEffect(() => {
    if (typeof window == "undefined") return;
    addStateToLocalStorage(state, locStorTableKey);
  }, [state]);

  // TODO: + add state to localStorage.
  // + take initialState or state from local storage.
  // add dispatch to the cell. cell clicked, state changed.
  //    see Cell component, function which takes cell row and id works fine
  //    edit reducer to update cell value -> https://github.com/gitdagray/usereducer_tut/blob/main/src/App.js

  return (
    <BunkeringContext.Provider value={{ state, dispatch }}>
      <div className={styles.bunkering}>
        <Table />
      </div>
    </BunkeringContext.Provider>
  );
};

export default Bunkering;
