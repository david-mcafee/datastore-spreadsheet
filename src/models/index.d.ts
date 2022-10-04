import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type SpreadSheetMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CellMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class SpreadSheet {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly cells?: (Cell | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<SpreadSheet, SpreadSheetMetaData>);
  static copyOf(source: SpreadSheet, mutator: (draft: MutableModel<SpreadSheet, SpreadSheetMetaData>) => MutableModel<SpreadSheet, SpreadSheetMetaData> | void): SpreadSheet;
}

export declare class Cell {
  readonly id: string;
  readonly spreadSheetId: string;
  readonly row: string;
  readonly column: string;
  readonly value?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Cell, CellMetaData>);
  static copyOf(source: Cell, mutator: (draft: MutableModel<Cell, CellMetaData>) => MutableModel<Cell, CellMetaData> | void): Cell;
}