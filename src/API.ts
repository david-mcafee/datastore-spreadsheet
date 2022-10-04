/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSpreadSheetInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
};

export type ModelSpreadSheetConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelSpreadSheetConditionInput | null > | null,
  or?: Array< ModelSpreadSheetConditionInput | null > | null,
  not?: ModelSpreadSheetConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type SpreadSheet = {
  __typename: "SpreadSheet",
  id: string,
  name?: string | null,
  description?: string | null,
  cells?: ModelCellConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCellConnection = {
  __typename: "ModelCellConnection",
  items:  Array<Cell | null >,
  nextToken?: string | null,
};

export type Cell = {
  __typename: "Cell",
  id: string,
  spreadSheetId: string,
  row: string,
  column: string,
  value?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSpreadSheetInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteSpreadSheetInput = {
  id: string,
};

export type CreateCellInput = {
  id?: string | null,
  spreadSheetId: string,
  row: string,
  column: string,
  value?: string | null,
};

export type ModelCellConditionInput = {
  spreadSheetId?: ModelIDInput | null,
  row?: ModelStringInput | null,
  column?: ModelStringInput | null,
  value?: ModelStringInput | null,
  and?: Array< ModelCellConditionInput | null > | null,
  or?: Array< ModelCellConditionInput | null > | null,
  not?: ModelCellConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCellInput = {
  id: string,
  spreadSheetId?: string | null,
  row?: string | null,
  column?: string | null,
  value?: string | null,
};

export type DeleteCellInput = {
  id: string,
};

export type ModelSpreadSheetFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelSpreadSheetFilterInput | null > | null,
  or?: Array< ModelSpreadSheetFilterInput | null > | null,
  not?: ModelSpreadSheetFilterInput | null,
};

export type ModelSpreadSheetConnection = {
  __typename: "ModelSpreadSheetConnection",
  items:  Array<SpreadSheet | null >,
  nextToken?: string | null,
};

export type ModelCellFilterInput = {
  id?: ModelIDInput | null,
  spreadSheetId?: ModelIDInput | null,
  row?: ModelStringInput | null,
  column?: ModelStringInput | null,
  value?: ModelStringInput | null,
  and?: Array< ModelCellFilterInput | null > | null,
  or?: Array< ModelCellFilterInput | null > | null,
  not?: ModelCellFilterInput | null,
};

export type CreateSpreadSheetMutationVariables = {
  input: CreateSpreadSheetInput,
  condition?: ModelSpreadSheetConditionInput | null,
};

export type CreateSpreadSheetMutation = {
  createSpreadSheet?:  {
    __typename: "SpreadSheet",
    id: string,
    name?: string | null,
    description?: string | null,
    cells?:  {
      __typename: "ModelCellConnection",
      items:  Array< {
        __typename: "Cell",
        id: string,
        spreadSheetId: string,
        row: string,
        column: string,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSpreadSheetMutationVariables = {
  input: UpdateSpreadSheetInput,
  condition?: ModelSpreadSheetConditionInput | null,
};

export type UpdateSpreadSheetMutation = {
  updateSpreadSheet?:  {
    __typename: "SpreadSheet",
    id: string,
    name?: string | null,
    description?: string | null,
    cells?:  {
      __typename: "ModelCellConnection",
      items:  Array< {
        __typename: "Cell",
        id: string,
        spreadSheetId: string,
        row: string,
        column: string,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSpreadSheetMutationVariables = {
  input: DeleteSpreadSheetInput,
  condition?: ModelSpreadSheetConditionInput | null,
};

export type DeleteSpreadSheetMutation = {
  deleteSpreadSheet?:  {
    __typename: "SpreadSheet",
    id: string,
    name?: string | null,
    description?: string | null,
    cells?:  {
      __typename: "ModelCellConnection",
      items:  Array< {
        __typename: "Cell",
        id: string,
        spreadSheetId: string,
        row: string,
        column: string,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCellMutationVariables = {
  input: CreateCellInput,
  condition?: ModelCellConditionInput | null,
};

export type CreateCellMutation = {
  createCell?:  {
    __typename: "Cell",
    id: string,
    spreadSheetId: string,
    row: string,
    column: string,
    value?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCellMutationVariables = {
  input: UpdateCellInput,
  condition?: ModelCellConditionInput | null,
};

export type UpdateCellMutation = {
  updateCell?:  {
    __typename: "Cell",
    id: string,
    spreadSheetId: string,
    row: string,
    column: string,
    value?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCellMutationVariables = {
  input: DeleteCellInput,
  condition?: ModelCellConditionInput | null,
};

export type DeleteCellMutation = {
  deleteCell?:  {
    __typename: "Cell",
    id: string,
    spreadSheetId: string,
    row: string,
    column: string,
    value?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetSpreadSheetQueryVariables = {
  id: string,
};

export type GetSpreadSheetQuery = {
  getSpreadSheet?:  {
    __typename: "SpreadSheet",
    id: string,
    name?: string | null,
    description?: string | null,
    cells?:  {
      __typename: "ModelCellConnection",
      items:  Array< {
        __typename: "Cell",
        id: string,
        spreadSheetId: string,
        row: string,
        column: string,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSpreadSheetsQueryVariables = {
  filter?: ModelSpreadSheetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSpreadSheetsQuery = {
  listSpreadSheets?:  {
    __typename: "ModelSpreadSheetConnection",
    items:  Array< {
      __typename: "SpreadSheet",
      id: string,
      name?: string | null,
      description?: string | null,
      cells?:  {
        __typename: "ModelCellConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCellQueryVariables = {
  id: string,
};

export type GetCellQuery = {
  getCell?:  {
    __typename: "Cell",
    id: string,
    spreadSheetId: string,
    row: string,
    column: string,
    value?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCellsQueryVariables = {
  filter?: ModelCellFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCellsQuery = {
  listCells?:  {
    __typename: "ModelCellConnection",
    items:  Array< {
      __typename: "Cell",
      id: string,
      spreadSheetId: string,
      row: string,
      column: string,
      value?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateSpreadSheetSubscription = {
  onCreateSpreadSheet?:  {
    __typename: "SpreadSheet",
    id: string,
    name?: string | null,
    description?: string | null,
    cells?:  {
      __typename: "ModelCellConnection",
      items:  Array< {
        __typename: "Cell",
        id: string,
        spreadSheetId: string,
        row: string,
        column: string,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSpreadSheetSubscription = {
  onUpdateSpreadSheet?:  {
    __typename: "SpreadSheet",
    id: string,
    name?: string | null,
    description?: string | null,
    cells?:  {
      __typename: "ModelCellConnection",
      items:  Array< {
        __typename: "Cell",
        id: string,
        spreadSheetId: string,
        row: string,
        column: string,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSpreadSheetSubscription = {
  onDeleteSpreadSheet?:  {
    __typename: "SpreadSheet",
    id: string,
    name?: string | null,
    description?: string | null,
    cells?:  {
      __typename: "ModelCellConnection",
      items:  Array< {
        __typename: "Cell",
        id: string,
        spreadSheetId: string,
        row: string,
        column: string,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCellSubscription = {
  onCreateCell?:  {
    __typename: "Cell",
    id: string,
    spreadSheetId: string,
    row: string,
    column: string,
    value?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCellSubscription = {
  onUpdateCell?:  {
    __typename: "Cell",
    id: string,
    spreadSheetId: string,
    row: string,
    column: string,
    value?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCellSubscription = {
  onDeleteCell?:  {
    __typename: "Cell",
    id: string,
    spreadSheetId: string,
    row: string,
    column: string,
    value?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
