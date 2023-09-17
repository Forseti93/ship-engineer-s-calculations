interface ICell {
  id: string;
  value: number;
}

interface ITable {
  columnsHeaders: string[] | number[];
  rows: number[][];
}
