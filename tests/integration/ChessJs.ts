import Chess from "../../src/index";
import { whiteBlackFigures } from "../../src/lib/constants";
import {
  boardAtStart,
  takenFieldsAtStart,
  figuresAtStart
} from "../../lib/returnObjects/AtStart";

describe("testing new Game", () => {
  const Game = new Chess();
  describe("new Game is correctly initialized", () => {
    test("all figures are alive after new Game is initialized", () => {
      expect(Game.getAliveFigures()).toEqual(whiteBlackFigures);
    });

    test("no figures are dead after new Game is initialized", () => {
      expect(Game.getDeadFigures()).toEqual({ white: [], black: [] });
    });

    test("board is initialized correctly after new Game is initialized", () => {
      expect(Game.getBoard()).toEqual(boardAtStart);
    });

    test("moveHistory is empty after new Game is initialized", () => {
      expect(Game.getMoveHistory()).toEqual([]);
    });

    test("its whites turn after new Game is initialized", () => {
      expect(Game.getTurn()).toEqual(0);
    });

    test("check is false after new Game is initialized", () => {
      expect(Game.getCheck()).toEqual(false);
    });

    test("figures are initialized correctly after new Game is initialized", () => {
      expect(Game.getFigures()).toEqual(figuresAtStart);
    });

    test("takenFields is initialized correctly after new Game is initialized", () => {
      expect(Game.getTakenFields()).toEqual(takenFieldsAtStart);
    });
  });

  describe("getPossibleMoves returns right moves at start", () => {
    test("pawn moves are returned correctly", () => {
      expect(Game.getPossibleMoves("A2")).toContain("A3");
      expect(Game.getPossibleMoves("A2")).toContain("A4");
      expect(Game.getPossibleMoves("A7")).toContain("A6");
      expect(Game.getPossibleMoves("A7")).toContain("A5");
    });
  });
});
