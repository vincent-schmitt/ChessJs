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
            possibleMoves.push(cur);
          }
          //   const mcc = moveCreatesCheck(
          //     figures,
          //     updateTakenFields(takenFields, { org: field.field, dest: cur })
          //   );
          //   if (!mcc) {
          //     possibleMoves.push(cur);
          //   } else if (mcc[field.figure.side].length === 0) {
          //     possibleMoves.push(cur);
          //   }
          // }
        }
      } else {
        if (!Object.keys(takenFields).includes(cur)) {
          possibleMoves.push(cur);

          // const mcc = moveCreatesCheck(
          //   figures,
          //   updateTakenFields(takenFields, { org: field.field, dest: cur })
          // );
          // if (!mcc) {
          //   possibleMoves.push(cur);
          // } else if (mcc[field.figure.side].length === 0) {
          //   possibleMoves.push(cur);
          // }
        }
      }
    }
  });
  return possibleMoves;
};

export const getPossibleRookMoves = (
  field: FieldI,
  takenFields: TakenFieldsI
) => {
  let possibleMoves = [];

  // Horizontal
  possibleMoves.concat(getPossibleHorizontalMoves(field, takenFields));
  // Vertical
  possibleMoves.concat(getVerticalPossibleMoves(field, takenFields));

  return possibleMoves;
};

export const getPossibleKnightMoves = (
  field: FieldI,
  takenFields: TakenFieldsI
) => {
  let possibleMoves = [];

  const [column, row] = getColumnAndRowFromField(field.field);
  const pMoves = [
    { column: column + 2, row: row + 1 },
    { column: column + 2, row: row - 1 },
    { column: column - 2, row: row + 1 },
    { column: column + 2, row: row - 1 },
    { column: column + 1, row: row + 2 },
    { column: column - 1, row: row + 2 },
    { column: column + 1, row: row - 2 },
    { column: column - 1, row: row - 2 }
  ];

  for (let move of pMoves) {
    if (isValidField(move.column, move.row)) {
      const cur = takenFields[getFieldFromColumnAndRow(move.column, move.row)];

      if (cur) {
        if (cur.figure.side !== field.figure.side) {
          possibleMoves.push(getFieldFromColumnAndRow(move.column, move.row));
        }
      } else {
        possibleMoves.push(getFieldFromColumnAndRow(move.column, move.row));
      }
    }
  }
  return possibleMoves;
};

const isValidField = (column: columnIndT, row: rowT) => {
  if (column > 8 || column < 1 || row > 8 || row < 1) {
    return false;
  }
  return true;
};

const getPossibleHorizontalMoves = (
  orgField: FieldI,
  takenFields: TakenFieldsI
) => {
  const direction = { left: -1, right: 1 };
  let possibleMoves = [];
  Object.keys(direction).forEach(dir => {
    let found = false;
    let cur = orgField.field;
    while (!found) {
      const current = getAdjacentFieldHor(cur, direction[dir]);
      if (current) {
        const currentField = takenFields[current];
        if (currentField) {
          if (currentField.figure.side !== orgField.figure.side) {
            possibleMoves.push(current);
            found = true;
          } else {
            found = true;
          }
        } else {
          possibleMoves.push(current);
        }
        cur = current;
      } else {
        found = true;
      }
    }
  });
  return possibleMoves;
};

const getVerticalPossibleMoves = (
  orgField: FieldI,
  takenFields: TakenFieldsI
) => {
  const direction = { left: -1, right: 1 };
  let possibleMoves = [];

  Object.keys(direction).forEach(dir => {
    let found = false;
    let cur = orgField.field;

    while (!found) {
      const current = getAdjacentFieldVer(cur, direction[dir]);
      if (current) {
        const currentField = takenFields[current];
        if (currentField) {
          if (currentField.figure.side !== orgField.figure.side) {
            possibleMoves.push(current);
            found = true;
          } else {
            found = true;
          }
        } else {
          possibleMoves.push(current);
        }
        cur = current;
      } else {
        found = true;
      }
    }
  });
  return possibleMoves;
};

const getAdjacentFieldHor = (
  field: FieldsLabT,
  direction: -1 | 1
): FieldsLabT | false => {
  const newColumn = columnsInd[columnsLab[field[0] + direction]];
  if (newColumn) {
    //@ts-ignore

    return newColumn + field[1];
  }
  return false;
};

const getAdjacentFieldVer = (
  field: FieldsLabT,
  direction: -1 | 1
): FieldsLabT | false => {
  if (Number(field[1]) + direction <= 8 && Number(field[1]) + direction >= 1) {
    //@ts-ignore
    return field[0] + (Number(field[1]) + direction);
  }
  return false;
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

  for (let dir of Object.keys(direction)) {
    let found = false;
    let cur = king.field;

    while (!found) {
      const current = getAdjacentFieldHor(cur, direction[dir]);
      if (current) {
        const adjacent = takenFields[current];
        console.log(adjacent);
        if (adjacent) {
          found = true;
          if (
            adjacent.figure.side !== king.side &&
            (adjacent.figure.type === "Q" || adjacent.figure.type === "R")
          ) {
            checks.push(adjacent.field);
          }
        }
      }
    }
  }

  // check vertical
  for (let side of Object.keys(direction)) {
    let found = false;
    let cur = king.field;

    while (!found) {
      const current = getAdjacentFieldVer(cur, direction[side]);
      if (current) {
        const adjacent = takenFields[current];
        if (adjacent) {
          found = true;

          if (
            adjacent.figure.side !== king.side &&
            (adjacent.figure.type === "Q" || adjacent.figure.type === "R")
          ) {
            checks.push(adjacent.field);
          }
        }
      }
    }
  }

  return false;
};
