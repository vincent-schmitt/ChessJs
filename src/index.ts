// types
import { FiguresI, whiteBlackFiguresI } from "./types/index";

//helpers
import {
  createAliveStartFigures,
  createStartFigures
} from "./lib/helpers/index";

class ChessJs {
  alive: whiteBlackFiguresI;
  dead: whiteBlackFiguresI;
  figures: FiguresI;
  constructor(GameState = null) {
    if (!GameState) {
      this.__newGame();
    } else {
      // TODO: create game from GameState
    }
  }

  __newGame = () => {
    this.alive = createAliveStartFigures();
    this.dead = { white: [], black: [] };

    this.figures = createStartFigures();

    console.log(this.figures);
  };
}

export default ChessJs;
