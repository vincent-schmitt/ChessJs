export type PawnsT = "P1" | "P2" | "P3" | "P4" | "P5" | "P6" | "P7" | "P8";

type RooksT = "R1" | "R2";

type KnightT = "N1" | "N2";

type BishopT = "B1" | "B2";

type QueenT = "Q";

type KinkT = "K";

type figuresT = PawnsT | KnightT | RooksT | BishopT | QueenT | KinkT;

type figureTypeT = "P" | "R" | "N" | "B" | "Q" | "K";

export type rowT = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type columnT = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export interface figureI {
  type: figureTypeT;
  side: sideT;
  field: fieldsT;
  moves: string[];
}

interface blackWhiteFiguresI {
  [key: string]: figureI;
}

export interface FiguresI {
  white: blackWhiteFiguresI;
}

export type sideT = 0 | 1;

export interface aliveFiguresI {
  white: figuresT[];
  black: figuresT[];
}

export type MovesT = string[];

interface fieldI {
  figure: figureI;
  color: 0 | 1;
}

export interface fieldsI {
  [key: string]: fieldI;
}

export type TakenFieldsI = { [key in fieldsT]?: fieldI };

type fieldsT =
  | "A1"
  | "A2"
  | "A3"
  | "A4"
  | "A5"
  | "A6"
  | "A7"
  | "A8"
  | "B1"
  | "B2"
  | "B3"
  | "B4"
  | "B5"
  | "B6"
  | "B7"
  | "B8"
  | "C1"
  | "C2"
  | "C3"
  | "C4"
  | "C5"
  | "C6"
  | "C7"
  | "C8"
  | "D1"
  | "D2"
  | "D3"
  | "D4"
  | "D5"
  | "D6"
  | "D7"
  | "D8"
  | "E1"
  | "E2"
  | "E3"
  | "E4"
  | "E5"
  | "E6"
  | "E7"
  | "E8"
  | "F1"
  | "F2"
  | "F3"
  | "F4"
  | "F5"
  | "F6"
  | "F7"
  | "F8"
  | "G1"
  | "G2"
  | "G3"
  | "G4"
  | "G5"
  | "G6"
  | "G7"
  | "G8"
  | "H1"
  | "H2"
  | "H3"
  | "H4"
  | "H5"
  | "H6"
  | "H7"
  | "H8";
