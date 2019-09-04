// types
import { FieldI, TakenFieldsI } from "../../types/ChessJsProperties/Fields";
import {
  FiguresByColorI,
  FigureI
} from "../../types/ChessJsProperties/Figures";
import { getColumnAndRowFromField } from "./index";
import { rowT, columnIndT } from "../../types/index";

// helpers
import { getFieldFromColumnAndRow } from "./index";
import { sideLabT } from "../../types/ChessJsProperties/Side";

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
            //TODO: check if move creates check
            possibleMoves.push(cur);
          }
        }
      } else {
        if (!Object.keys(takenFields).includes(cur)) {
          // TODO: check if move creates check
          possibleMoves.push(cur);
        }
      }
    }
  });
  return possibleMoves;
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
  // check horizontal
  return false;
};
