import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CellMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Cell {
  readonly id: string;
  readonly row: string;
  readonly column: string;
  readonly value?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Cell, CellMetaData>);
  static copyOf(source: Cell, mutator: (draft: MutableModel<Cell, CellMetaData>) => MutableModel<Cell, CellMetaData> | void): Cell;
}