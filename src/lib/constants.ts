// types
import { aliveFiguresI } from "../types/ChessJsProperties/Figures";

import { sideIndT } from "../types/ChessJsProperties/Side";
import { turnLabT } from "../types/ChessJsProperties/Turn";

export const figures = [
  "R1",
  "N1",
  "B1",
  "Q",
  "K",
  "B2",
  "N2",
  "R2",
  "P1",
  "P2",
  "P3",
  "P4",
  "P5",
  "P6",
  "P7",
  "P8"
];

export const fieldColors = { white: 0, black: 1 };

export const whiteBlackFigures: aliveFiguresI = {
  white: [
    "R1",
    "N1",
    "B1",
    "Q",
    "K",
    "B2",
    "N2",
    "R2",
    "P1",
    "P2",
    "P3",
    "P4",
    "P5",
    "P6",
    "P7",
    "P8"
  ],
  black: [
    "R1",
    "N1",
    "B1",
    "Q",
    "K",
    "B2",
    "N2",
    "R2",
    "P1",
    "P2",
    "P3",
    "P4",
    "P5",
    "P6",
    "P7",
    "P8"
  ]
};

export const columnsLab = { A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8 };
export const columnsInd = {
  1: "A",
  2: "B",
  3: "C",
  4: "D",
  5: "E",
  6: "F",
  7: "G",
  8: "H"
};

export const rows = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8 };

interface turnI {
  0: turnLabT;
  1: turnLabT;
}

interface playersSideI {
  white: sideIndT;
  black: sideIndT;
}

export const turnLab = { white: 0, black: 1 };
export const turnInd: turnI = { 0: "white", 1: "black" };

export const playerSideLab: playersSideI = { white: 0, black: 1 };
export const playerSideInd = { 0: "white", 1: "black" };
