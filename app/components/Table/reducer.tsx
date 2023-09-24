import { ICellId, ITable } from "./interfaces";

// An enum with all the types of actions to use in our reducer
enum ACTIONS {
  CHANGE_VALUE = "change_value",
}

// An interface for our actions
interface IACTIONS {
  type: ACTIONS;
  payload: { cellId: ICellId; value: number };
}

export const tableReducer = (state: ITable, action: IACTIONS) => {
  switch (action.type) {
    case "change_value":
      const newRows = state!.rows;
      const rowId = action.payload.cellId.row;
      const colId = action.payload.cellId.col;
      const newValue = action.payload.value;

      newRows[rowId][colId] = newValue;

      return {
        ...state!,
        rows: newRows,
      };
    default:
      console.log(
        new Error(`see tableReducer. wrong action type: "${action.type}"`)
      );

      return state;
    // throw new Error(`see tableReducer. wrong action type: "${action.type}"`);
  }
};
