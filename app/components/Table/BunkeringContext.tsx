import { createContext } from "react";
import { ITable } from "./interfaces";

export const BunkeringContext = createContext<{
  state: ITable;
  dispatch: any;
} | null>(null);
