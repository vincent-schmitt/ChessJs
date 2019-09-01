export type PawnsT = "P1" | "P2" | "P3" | "P4" | "P5" | "P6" | "P7" | "P8";

type RooksT = "R1" | "R2";

type KnightT = "N1" | "N2";

type BishopT = "B1" | "B2";

type QueenT = "Q";

type KinkT = "K";

type figuresT = PawnsT | KnightT | RooksT | BishopT | QueenT | KinkT;

export interface whiteBlackFiguresI {
  white: figuresT[];
  black: figuresT[];
}

export interface FiguresI {}

export type sideT = 0 | 1;
