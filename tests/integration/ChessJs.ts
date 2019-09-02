import Chess from "../../src/index";
import { whiteBlackFigures } from "../../src/lib/constants";

describe("new Game is correctly initialized", () => {
  const Game = new Chess();

  test("all figures are alive after new Game is initialized", () => {
    expect(Game.getAliveFigures()).toEqual(whiteBlackFigures);
  });
});
