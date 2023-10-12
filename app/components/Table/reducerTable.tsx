import { addStateToLocalStorage, locStorTableKey } from "../../pages/bunkering";
import { correctedDensity, quantityMT } from "../../scripts/formulas";
import { ICellId, ITable } from "./interfaces";

export enum EACTIONS {
  CHANGE_VALUE = "change_value",
  INITIALIZING_STATE = "initializing_state",
}

export interface IActionChangeValue {
  type: EACTIONS.CHANGE_VALUE;
  payload: { cellId: ICellId; value: number };
}

export interface IActionInitializingState {
  type: EACTIONS.INITIALIZING_STATE;
  payload: ITable;
}

export type TActions = IActionChangeValue | IActionInitializingState;

export const tableReducer = (state: ITable, action: TActions) => {
  switch (action.type) {
    case "change_value":
      const newRows: any = state.rows;
      const rowId: number = action.payload.cellId.row;
      const colId: number = action.payload.cellId.col;
      const newValue: string | number = action.payload.value;

      // new cell's value added (input onChange)
      newRows[rowId][colId] = newValue;

      // formulas calculations
      // "Density of fuel at 15C", 5 col
      // "Temperature", 6 col
      // result in "Corrected density", col 7
      newRows[rowId][7] = correctedDensity(
        newRows[rowId][5],
        newRows[rowId][6]
      );

      // "Corrected density", col 7
      // "quantityCBM", col 4
      // result in "Quantity (MT)", col 8, quantityMT(correctedDensity(density15Cels, temperatureCels), quantityCBM)
      newRows[rowId][8] = quantityMT(newRows[rowId][7], newRows[rowId][4]);

      addStateToLocalStorage(
        {
          ...state,
          rows: newRows,
        },
        locStorTableKey
      );

      return {
        ...state,
        rows: newRows,
      };
    case "initializing_state":
      return action.payload;

    default:
      console.log(
        new Error(`see tableReducer. wrong action type: "${action.type}"`)
      );

      return state;
  }
};
