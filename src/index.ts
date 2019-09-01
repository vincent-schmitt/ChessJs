// types
import { FiguresI, aliveFiguresI, MovesT, TakenFieldsI } from "./types/index";

//helpers
import {
  createAliveStartFigures,
  createStartFigures,
  createTakenFieldsFromFigures,
  createBoardFromTakenFields
} from "./lib/helpers/index";

class ChessJs {
  alive: aliveFiguresI;
  dead: aliveFiguresI;
  figures: FiguresI;
  moves: MovesT;
  takenFields: TakenFieldsI;
  board: any;
  constructor(GameState = null) {
    if (!GameState) {
      this.__newGame();
    } else {
      // TODO: create game from GameState
    }
  }

  __newGame = () => {
    this.moves = [];
    this.alive = createAliveStartFigures();
    this.dead = { white: [], black: [] };
    this.figures = createStartFigures();
    this.takenFields = createTakenFieldsFromFigures(this.figures);
    this.board = createBoardFromTakenFields(this.takenFields);
  };
}

export default ChessJs;
