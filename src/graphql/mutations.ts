/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSpreadSheet = /* GraphQL */ `
  mutation CreateSpreadSheet(
    $input: CreateSpreadSheetInput!
    $condition: ModelSpreadSheetConditionInput
  ) {
    createSpreadSheet(input: $input, condition: $condition) {
      id
      name
      description
      cells {
        items {
          id
          spreadSheetId
          row
          column
          value
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateSpreadSheet = /* GraphQL */ `
  mutation UpdateSpreadSheet(
    $input: UpdateSpreadSheetInput!
    $condition: ModelSpreadSheetConditionInput
  ) {
    updateSpreadSheet(input: $input, condition: $condition) {
      id
      name
      description
      cells {
        items {
          id
          spreadSheetId
          row
          column
          value
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteSpreadSheet = /* GraphQL */ `
  mutation DeleteSpreadSheet(
    $input: DeleteSpreadSheetInput!
    $condition: ModelSpreadSheetConditionInput
  ) {
    deleteSpreadSheet(input: $input, condition: $condition) {
      id
      name
      description
      cells {
        items {
          id
          spreadSheetId
          row
          column
          value
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createCell = /* GraphQL */ `
  mutation CreateCell(
    $input: CreateCellInput!
    $condition: ModelCellConditionInput
  ) {
    createCell(input: $input, condition: $condition) {
      id
      spreadSheetId
      row
      column
      value
      createdAt
      updatedAt
    }
  }
`;
export const updateCell = /* GraphQL */ `
  mutation UpdateCell(
    $input: UpdateCellInput!
    $condition: ModelCellConditionInput
  ) {
    updateCell(input: $input, condition: $condition) {
      id
      spreadSheetId
      row
      column
      value
      createdAt
      updatedAt
    }
  }
`;
export const deleteCell = /* GraphQL */ `
  mutation DeleteCell(
    $input: DeleteCellInput!
    $condition: ModelCellConditionInput
  ) {
    deleteCell(input: $input, condition: $condition) {
      id
      spreadSheetId
      row
      column
      value
      createdAt
      updatedAt
    }
  }
`;
