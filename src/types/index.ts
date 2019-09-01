type figuresT =
  | "R1"
  | "N1"
  | "B1"
  | "Q"
  | "K"
  | "B2"
  | "N2"
  | "R2"
  | "P1"
  | "P2"
  | "P3"
  | "P4"
  | "P5"
  | "P6"
  | "P7"
  | "P8";

export interface whiteBlackFiguresI {
  white: figuresT[];
  black: figuresT[];
}
