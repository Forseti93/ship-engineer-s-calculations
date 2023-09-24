export interface ICellId {
  row: number;
  col: number;
}

export interface ICell {
  id: string;
  value: number;
}

export interface ITable {
  columnsHeaders: string[] | number[];
  rows: number[][];
}
