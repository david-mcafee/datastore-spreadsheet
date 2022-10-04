import { useEffect, useState } from "react";
// import { useEffect } from "react";
import "./App.css";

import { DataStore } from "aws-amplify";
import { Cell, SpreadSheet } from "./models";
import {
  // Badge,
  Button,
  Collection,
  Card,
  Heading,
  // Divider,
  // Flex,
  // View,
  // IconBookmark,
  Text,
} from "@aws-amplify/ui-react";

const initialSpreadSheetState: Array<SpreadSheet> = [];

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function App() {
  const [currentCell, setCurrentCell] = useState({} as Cell);
  const [currentSpreadSheet, setCurrentSpreadSheet] = useState(
    {} as SpreadSheet
  );
  const [cells, setCells] = useState([] as any);
  const [spreadsheets, setSpreadSheets] = useState(initialSpreadSheetState);

  async function onCreateSpreadSheet() {
    const _spreadsheet = await DataStore.save(
      new SpreadSheet({
        name: "test",
        description: "test",
      })
    );

    await createEmptyCellsForNewSpreadSheet(_spreadsheet.id);
    setCurrentSpreadSheet(_spreadsheet);
    console.log("spreadsheet", _spreadsheet);
    fetchSpreadSheets();
  }

  async function onCreateCell(
    spreadSheetId: string,
    row: string,
    column: string,
    value: string
  ) {
    return await DataStore.save(
      new Cell({
        row,
        column,
        value,
        spreadSheetId,
      } as Cell)
    );
  }

  // function to call DataStore and create cells with rows "1" through "10" and columns "A" through "G"
  async function createEmptyCellsForNewSpreadSheet(spreadSheetId: string) {
    const _cells = [];
    for (let i = 1; i <= 10; i++) {
      for (let j = 0; j < 7; j++) {
        _cells.push(
          await onCreateCell(spreadSheetId, i.toString(), alphabet[j], "")
        );
      }
    }
    setCells(_cells);
    console.log("cells", _cells);
  }

  async function fetchSpreadSheets() {
    const _spreadsheets = await DataStore.query(SpreadSheet);
    console.log("spreadsheets", _spreadsheets);
    setSpreadSheets(_spreadsheets);
  }

  useEffect(() => {
    fetchSpreadSheets();
  }, []);

  async function deleteSpreadSheet(spreadSheetId: string) {
    await DataStore.delete(SpreadSheet, spreadSheetId);
    fetchSpreadSheets();
  }

  // async function getCells() {
  //   const _cells = await DataStore.query(Cell);
  //   setCells(_cells);
  //   console.log("Cells", _cells);
  // }

  // async function updateCell() {
  //   const [originalCell] = await DataStore.query(Cell);
  //   console.log("Original Cell:", originalCell);

  //   try {
  //     const cell = await DataStore.save(
  //       Cell.copyOf(originalCell, (updated) => {
  //         updated.name = `name ${Date.now()}`;
  //       })
  //     );

  //     console.log("Cell updated:", cell);
  //   } catch (error) {
  //     console.error("Save failed:", error);
  //   }
  // }

  // useEffect(() => {
  //   getCells();
  //   const subscription = DataStore.observeQuery(Cell).subscribe((data) => {
  //     // const subscription = DataStore.observe(Cell).subscribe((data) => {
  //     console.log("DATA FROM OBSERVE:", data);
  //   });

  //   return () => subscription.unsubscribe();
  // }, []);

  function handleChangeCell(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e);
  }

  const createCellId = (cell: Cell) => {
    return `${cell.row}-${cell.column}`;
  };

  const renderCell = (cell: Cell) => {
    return (
      <td>
        <input
          type="text"
          id={createCellId(cell)}
          value={cell.value as string}
          onChange={handleChangeCell}
          onClick={() => setCurrentCell(cell)}
        />
      </td>
    );
  };

  const renderRow = (cells: Cell[]) => {
    return (
      <tr>
        {cells.map((cell) => {
          return renderCell(cell);
        })}
      </tr>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{`Current cell: ${currentCell?.column}:${currentCell?.row}`}</h1>
        <button onClick={onCreateSpreadSheet}>New Spreadsheet</button>
        <table>
          <thead>
            <tr>
              <th colSpan={25}>DataStore Spreadsheet</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {renderRow([
                { column: "A", row: "1", value: "value" } as Cell,
                { column: "B", row: "1", value: "value" } as Cell,
              ])}
            </tr>
            <tr>
              {renderRow([
                { column: "A", row: "2", value: "value" } as Cell,
                { column: "B", row: "2", value: "value" } as Cell,
              ])}
            </tr>
          </tbody>
        </table>
        <Collection type="list" items={spreadsheets} gap="1.5rem">
          {(spreadSheet, index) => (
            <Card
              key={spreadSheet.id ? spreadSheet.id : index}
              padding="1.5rem"
              variation={"elevated"}
            >
              <Heading level={4}>{spreadSheet.name}</Heading>
              <Text>{spreadSheet.description}</Text>
              <Button
                loadingText="loading"
                ariaLabel="Delete"
                onClick={() => deleteSpreadSheet(spreadSheet.id)}
              >
                Delete
              </Button>
            </Card>
          )}
        </Collection>
      </header>
    </div>
  );
}

export default App;
