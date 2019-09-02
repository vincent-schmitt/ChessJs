// imports
import { sideIndT } from "./Side";
import { FieldsLabT } from "./Fields";

// exports

export type figuresT = PawnsT | KnightT | RooksT | BishopT | QueenT | KingT;

export interface FigureI {
  type: figureTypeT;
  side: sideIndT;
  field: FieldsLabT;
  moves: string[];
}

export interface FiguresByColorI {
  white: figuresI;
  black: figuresI;
}

export interface aliveFiguresI {
  white: figuresT[];
  black: figuresT[];
}

export type PawnsT = "P1" | "P2" | "P3" | "P4" | "P5" | "P6" | "P7" | "P8";

type RooksT = "R1" | "R2";

type KnightT = "N1" | "N2";

type BishopT = "B1" | "B2";

type QueenT = "Q";

type KingT = "K";

interface figuresI {
  [key: string]: FigureI;
}

type figureTypeT = "P" | "R" | "N" | "B" | "Q" | "K";
