/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSpreadSheet = /* GraphQL */ `
  subscription OnCreateSpreadSheet {
    onCreateSpreadSheet {
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
export const onUpdateSpreadSheet = /* GraphQL */ `
  subscription OnUpdateSpreadSheet {
    onUpdateSpreadSheet {
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
export const onDeleteSpreadSheet = /* GraphQL */ `
  subscription OnDeleteSpreadSheet {
    onDeleteSpreadSheet {
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
export const onCreateCell = /* GraphQL */ `
  subscription OnCreateCell {
    onCreateCell {
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
export const onUpdateCell = /* GraphQL */ `
  subscription OnUpdateCell {
    onUpdateCell {
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
export const onDeleteCell = /* GraphQL */ `
  subscription OnDeleteCell {
    onDeleteCell {
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
