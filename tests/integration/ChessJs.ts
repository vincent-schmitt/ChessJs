import Chess from "../../src/index";
import { whiteBlackFigures } from "../../src/lib/constants";

describe("new Game is correctly initialized", () => {
  const Game = new Chess();

  test("new Game creates all figures", () => {
    expect(Game.alive).toEqual(whiteBlackFigures);
  });
});
