import { turnLabT } from "./Turn";
import { checkT } from "./Check";
import { FiguresByColorI } from "./Figures";
import { MovesT } from "./Moves";

export interface GameStateI {
  turn: turnLabT;
  check: checkT;
  figures: FiguresByColorI;
  moves: MovesT;
}
