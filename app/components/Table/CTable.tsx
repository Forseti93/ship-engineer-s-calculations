import { nanoid } from "nanoid";
import { ITable } from "./interfaces";

export class CTable {
  id: string;
  columnsCounter: number;
  rowsCounter: number;
  constructor(public table: ITable) {
    this.id = nanoid();
    this.columnsCounter = this.table.columnsHeaders.length;
    if (!this.table.rows) {
      this.rowsCounter = 1;
    } else {
      this.rowsCounter = this.table.rows.length;
    }
  }
}
