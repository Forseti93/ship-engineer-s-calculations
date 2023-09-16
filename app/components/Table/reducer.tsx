import { useReducer } from "react";

export default function tableReducer(state: any, action: any) {
  switch (action.type) {
    case "onCellClick":
      {
        return {
          cell: state.cell.id,
          value: state.cell.value,
        };
      }
      throw Error("Unknown action: '" + action.type + "'. In the tableReducer");
  }
}
