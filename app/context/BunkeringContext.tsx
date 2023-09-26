import { Dispatch, createContext } from "react";
import { ITable } from "../components/Table/interfaces";
import { TActions } from "../components/Table/reducerTable";

export const BunkeringContext = createContext<{
  state: ITable;
  dispatch: Dispatch<TActions>;
} | null>(null);
