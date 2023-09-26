export interface ICellId {
  row: number;
  col: number;
}

export interface ICell {
  id: string;
  value: number;
  isActive: boolean;
  onClick: () => void;
  onChange: (value: number) => void;
}

export interface ITable {
  columnsHeaders: string[] | number[];
  rows: number[][];
}
