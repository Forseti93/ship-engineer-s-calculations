"use client";
import React, { useEffect, useReducer } from "react";
import styles from "../styles/Bunkering.module.scss";
import Table from "../components/Table/Table";
import { EACTIONS, tableReducer } from "../components/Table/reducerTable";
import { BunkeringContext } from "../context/BunkeringContext";
import { ITable } from "../components/Table/interfaces";

export const locStorTableKey = "bunkering_table";

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
    [2, "1 PS", "MDO", 500, 30, 980, 20, 976.86, 29.31],
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

export const addStateToLocalStorage = (state: any, key: any) => {
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
  const [state, dispatch] = useReducer(tableReducer, templateState);

  useEffect(() => {
    dispatch({ type: EACTIONS.INITIALIZING_STATE, payload: initialState() });
  }, []);

  return (
    <BunkeringContext.Provider value={{ state, dispatch }}>
      <div className={styles.bunkering}>
        <Table />
      </div>
    </BunkeringContext.Provider>
  );
};

export default Bunkering;
