import Chess from "../../src/index";

const Game = new Chess();
describe("getPossibleMoves returns right moves at start", () => {
  test("pawn moves are returned correctly", () => {
    expect(Game.getPossibleMoves("A2")).toContain("A3");
    expect(Game.getPossibleMoves("A2")).toContain("A4");
    expect(Game.getPossibleMoves("A7")).toContain("A6");
    expect(Game.getPossibleMoves("A7")).toContain("A5");
  });

  test("Rook moves are returned correctly", () => {
    expect(Game.getPossibleMoves("A1")).toEqual([]);
    expect(Game.getPossibleMoves("H8")).toEqual([]);
  });

  test("Knight moves are returned correctly", () => {
    expect(Game.getPossibleMoves("B1")).toContain("A3");
    expect(Game.getPossibleMoves("B1")).toContain("C3");

    expect(Game.getPossibleMoves("G8")).toContain("H6");
    expect(Game.getPossibleMoves("G8")).toContain("F6");
  });
});
