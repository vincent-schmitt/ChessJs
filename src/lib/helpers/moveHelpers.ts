// types
import {
  FieldI,
  TakenFieldsI,
  FieldsLabT
} from "../../types/ChessJsProperties/Fields";
import {
  FiguresByColorI,
  FigureI
} from "../../types/ChessJsProperties/Figures";
import { getColumnAndRowFromField } from "./index";
import { rowT, columnIndT } from "../../types/index";

// helpers
import { getFieldFromColumnAndRow } from "./index";
import { sideLabT } from "../../types/ChessJsProperties/Side";
import { columnsInd, columnsLab } from "../constants";

interface moveI {
  row: rowT;
  column: columnIndT;
  kill: boolean;
}

export const getPossiblePawnMoves = (
  field: FieldI,
  takenFields: TakenFieldsI,
  figures: FiguresByColorI
) => {
  const [column, row] = getColumnAndRowFromField(field.field);

  const p = {
    0: [
      { row: row + 2, column: column, kill: false },
      { row: row + 1, column: column, kill: false },
      { row: row + 1, column: column + 1, kill: true },
      { row: row + 1, column: column - 1, kill: true }
    ],
    1: [
      { row: row - 2, column: column, kill: false },
      { row: row - 1, column: column, kill: false },
      { row: row - 1, column: column + 1, kill: true },
      { row: row - 1, column: column - 1, kill: true }
    ]
  };

  let possibleMoves = [];
  p[field.figure.side].forEach(move => {
    const cur = getFieldFromColumnAndRow(move.column, move.row);

    if (cur) {
      if (move.kill) {
        if (Object.keys(takenFields).includes(cur)) {
          if (takenFields[cur].figure.side !== field.figure.side) {
            const mcc = moveCreatesCheck(
              figures,
              updateTakenFields(takenFields, { org: field.field, dest: cur })
            );
            if (!mcc) {
              possibleMoves.push(cur);
            } else if (mcc[field.figure.side].length === 0) {
              possibleMoves.push(cur);
            }
          }
        }
      } else {
        if (!Object.keys(takenFields).includes(cur)) {
          const mcc = moveCreatesCheck(
            figures,
            updateTakenFields(takenFields, { org: field.field, dest: cur })
          );
          if (!mcc) {
            possibleMoves.push(cur);
          } else if (mcc[field.figure.side].length === 0) {
            possibleMoves.push(cur);
          }
        }
      }
    }
  });
  return possibleMoves;
};

const updateTakenFields = (
  takenFields: TakenFieldsI,
  move: { org: FieldsLabT; dest: FieldsLabT }
) => {
  const toReturn = { ...takenFields, [move.dest]: takenFields[move.org] };
  delete toReturn[move.org];

  return toReturn;
};

const moveCreatesCheck = (
  figures: FiguresByColorI,
  takenFields: TakenFieldsI
) => {
  let check = { white: [], black: [] };

  const kings = {
    white: figures.white["K"],
    black: figures.black["K"]
  };
  Object.keys(kings).forEach((side: sideLabT) => {
    const kic = kingInCheck(kings[side], takenFields);
    if (kic) {
      check[side].push(kic);
    }
  });

  return check.white.length && check.black.length > 0 ? check : false;
};

const kingInCheck = (
  king: FigureI,
  takenFields: TakenFieldsI
): false | FieldI[] => {
  let checks = [];
  // check horizontal
  const direction = { left: -1, right: 1 };

  for (let side of Object.keys(direction)) {
    let found = false;
    let cur = king.field;

    while (!found) {
      const adjacent = takenFields[getAdjacentFieldHor(cur, direction[side])];
      if (adjacent) {
        if (
          adjacent.figure.side !== king.side &&
          (adjacent.figure.type === "Q" || adjacent.figure.type === "R")
        ) {
          checks.push(adjacent.field);
        }
      }
    }
  }

  // check vertical
  for (let side of Object.keys(direction)) {
    let found = false;
    let cur = king.field;

    while (!found) {
      const adjacent = takenFields[getAdjacentFieldVer(cur, direction[side])];
      if (adjacent) {
        if (
          adjacent.figure.side !== king.side &&
          (adjacent.figure.type === "Q" || adjacent.figure.type === "R")
        ) {
          checks.push(adjacent.field);
        }
      }
    }
  }

  return false;
};

const getAdjacentFieldHor = (
  field: FieldsLabT,
  direction: -1 | 1
): FieldsLabT => {
  const newColumn = columnsInd[columnsLab[field[0] + direction]];
  //@ts-ignore
  return newColumn + field[1];
};

const getAdjacentFieldVer = (
  field: FieldsLabT,
  direction: -1 | 1
): FieldsLabT => {
  //@ts-ignore
  return field[0] + (Number(field[1]) + direction);
};
