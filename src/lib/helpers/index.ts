// constants
import {
  whiteBlackFigures,
  columnsLab,
  columnsInd,
  rows,
  playerSideLab,
  playerSideInd
} from "../constants";

// types
import { sideT, PawnsT } from "../../types/index";

export const createAliveStartFigures = () => {
  return whiteBlackFigures;
};

const __getPawnField = (pawn: PawnsT, side: sideT) => {
  if (playerSideLab[side] === playerSideLab.white) {
    return columnsInd[pawn[1]] + "2";
  } else {
    return columnsInd[pawn[1]] + "7";
  }
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
          current[figure] = {
            type: figType,
            side: side,
            //@ts-ignore
            field: __getPawnField(figure, side),
            moves: []
          };
      }
    });
    figures[side] = current;
  });

  return figures;
};
