// constants
import {
  whiteBlackFigures,
  columnsLab,
  columnsInd,
  fieldColors,
  rows,
  playerSideLab,
  playerSideInd,
  boardNulled
} from "../constants";

// types
import { rowT, columnIndT } from "../../types/index";
import { TakenFieldsI, FieldsLabT } from "../../types/ChessJsProperties/Fields";
import { PawnsT, FiguresByColorI } from "../../types/ChessJsProperties/Figures";
import { BoardI } from "../../types/ChessJsProperties/Board";

export const createAliveStartFigures = () => {
  return whiteBlackFigures;
};

const __getPawnField = (pawn: PawnsT, side: string) => {
  if (playerSideLab[side] === playerSideLab.white) {
    return columnsInd[pawn[1]] + "2";
  } else {
    return columnsInd[pawn[1]] + "7";
  }
};

export const getColumnAndRowFromField = (field: FieldsLabT) => {
  return [columnsLab[field[0]], Number(field[1])];
};

const __getRookField = (rook, side) => {
  if (playerSideLab[side] === playerSideLab.white) {
    if (rook[1] === "1") {
      return "A1";
    } else {
      return "H1";
    }
  } else {
    if (rook[1] === "1") {
      return "A8";
    } else {
      return "H8";
    }
  }
};

const __getKnightField = (knight, side) => {
  if (playerSideLab[side] === playerSideLab.white) {
    if (knight[1] === "1") {
      return "B1";
    } else {
      return "G1";
    }
  } else {
    if (knight[1] === "1") {
      return "B8";
    } else {
      return "G8";
    }
  }
};

const __getBishopField = (bishop, side) => {
  if (playerSideLab[side] === playerSideLab.white) {
    if (bishop[1] === "1") {
      return "C1";
    } else {
      return "F1";
    }
  } else {
    if (bishop[1] === "1") {
      return "C8";
    } else {
      return "F8";
    }
  }
};

const __getQueenField = side => {
  if (playerSideLab[side] === playerSideLab.white) {
    return "D1";
  } else {
    return "D8";
  }
};

const __getKingField = side => {
  if (playerSideLab[side] === playerSideLab.white) {
    return "E1";
  } else {
    return "E8";
  }
};

const createFigure = (type, side, field, moves) => {
  return {
    type: type,
    side: side,
    field: field,
    moves: moves
  };
};

export const createStartFigures = () => {
  let figures = { white: {}, black: {} };

  Object.keys(whiteBlackFigures).forEach(side => {
    let current = {};
    Object.keys(whiteBlackFigures[side]).forEach(fig => {
      const figure = whiteBlackFigures[side][fig];
      const figType = figure[0];
      const figN = figure[1];
      switch (figType) {
        case "P":
          current[figure] = createFigure(
            figType,
            playerSideLab[side],
            //@ts-ignore
            __getPawnField(figure, side),
            []
          );
          break;
        case "R":
          current[figure] = createFigure(
            figType,
            playerSideLab[side],
            __getRookField(figure, side),
            []
          );
          break;

        case "N":
          current[figure] = createFigure(
            figType,
            playerSideLab[side],
            __getKnightField(figure, side),
            []
          );
          break;

        case "B":
          current[figure] = createFigure(
            figType,
            playerSideLab[side],
            __getBishopField(figure, side),
            []
          );
          break;

        case "Q":
          current[figure] = createFigure(
            figType,
            playerSideLab[side],
            __getQueenField(side),
            []
          );
          break;

        case "K":
          current[figure] = createFigure(
            figType,
            playerSideLab[side],
            __getKingField(side),
            []
          );
          break;
      }
    });
    figures[side] = current;
  });

  return figures;
};

export const createTakenFieldsFromFigures = (
  figures: FiguresByColorI
): TakenFieldsI => {
  let fields: TakenFieldsI = {
    A1: { figure: null, color: 0, field: "A1", column: 1, row: 1 }
  };

  Object.keys(figures).map(side => {
    Object.keys(figures[side]).map(figure => {
      const fig = figures[side][figure];

      fields[fig.field] = {
        figure: fig,
        color: getFieldColor(fig.field[1], columnsLab[fig.field[0]]),
        field: fig.field,
        row: Number(fig.field[1]),
        column: columnsLab[fig.field[0]]
      };
    });
  });
  return fields;
};

export const getFieldFromColumnAndRow = (
  column: columnIndT,
  row: rowT
): FieldsLabT => {
  //@ts-ignore
  return columnsInd[column] + row;
};

const __getFigureFromTakenFields = (
  field: FieldsLabT,
  takenFields: TakenFieldsI
) => {
  if (takenFields[field]) {
    return takenFields[field].figure;
  } else {
    return null;
  }
};

export const createBoardFromTakenFields = (takenFields: TakenFieldsI) => {
  let board: BoardI = boardNulled;

  Object.keys(columnsInd).map(column => {
    let current = {};
    Object.keys(rows).map(row => {
      //@ts-ignore

      const field: FieldsLabT = getFieldFromColumnAndRow(Number(column), row);
      current[row] = {
        figure: __getFigureFromTakenFields(field, takenFields),
        //@ts-ignore
        color: getFieldColor(column, row),
        column: Number(column),
        row: row,
        field: field
      };
    });
    board[columnsInd[column]] = current;
  });
  return board;
};

const __getRowFieldColor = (order: 0 | 1, column: number) => {
  let fieldColorsP = [fieldColors.white, fieldColors.black];

  if (column % 2 === 0) {
    return fieldColorsP[order];
  } else {
    fieldColorsP.splice(order, 1);
    return fieldColorsP[0];
  }
};

const getFieldColor = (column: columnIndT, row: rowT) => {
  if (row % 2 === 0) {
    return __getRowFieldColor(0, column);
  } else {
    return __getRowFieldColor(1, column);
  }
};
