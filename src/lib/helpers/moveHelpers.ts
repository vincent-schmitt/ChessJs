// types
import { FieldI, TakenFieldsI } from "../../types/ChessJsProperties/Fields";
import { FiguresByColorI } from "../../types/ChessJsProperties/Figures";
import { getColumnAndRowFromField } from "./index";
import { rowT, columnIndT } from "../../types/index";

// helpers
import { getFieldFromColumnAndRow } from "./index";

interface moveI {
  row: rowT;
  column: columnIndT;
  kill: boolean;
}

export const getPossiblePawnMoves = (
  field: FieldI,
  takenFields: TakenFieldsI
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
            // TODO: check if move creates check
            possibleMoves.push(cur);
          }
        }
      } else {
        if (!Object.keys(takenFields).includes(cur)) {
          possibleMoves.push(cur);
        }
      }
    }
  });
  return possibleMoves;
};
