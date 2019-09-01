// types
import { whiteBlackFiguresI } from "./types/index";

//helpers
import { createStartFigures } from "./lib/helpers/index";

class ChessJs {
  alive: whiteBlackFiguresI;
  constructor(GameState = null) {
    if (!GameState) {
      this.__newGame();
    } else {
      // TODO: create game from GameState
    }
  }

  __newGame = () => {
    this.alive = createStartFigures();
  };
}

export default ChessJs;
