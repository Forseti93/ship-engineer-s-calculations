export interface ICell {
  value: string | (() => void);
  id: number;
  // key: string;
  // changeable: boolean;
  // styles: string;
}

export interface ITable {
  isLoading: boolean;
  columnsHeaders: string[];
  rows?: number[][];
}
