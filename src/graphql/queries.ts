/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSpreadSheet = /* GraphQL */ `
  query GetSpreadSheet($id: ID!) {
    getSpreadSheet(id: $id) {
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
export const listSpreadSheets = /* GraphQL */ `
  query ListSpreadSheets(
    $filter: ModelSpreadSheetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpreadSheets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        cells {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCell = /* GraphQL */ `
  query GetCell($id: ID!) {
    getCell(id: $id) {
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
export const listCells = /* GraphQL */ `
  query ListCells(
    $filter: ModelCellFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCells(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
