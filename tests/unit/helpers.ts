// src constants
import { whiteBlackFigures } from "../../src/lib/constants";

// test constants
import {
  takenFieldsAtStart,
  figuresAtStart,
  boardAtStart
} from "../../lib/returnObjects/AtStart";

// modules to test
import {
  createAliveStartFigures,
  createStartFigures,
  createTakenFieldsFromFigures,
  createBoardFromTakenFields
} from "../../src/lib/helpers/index";

describe("unit Tests: lib/helpers", () => {
  // test src/lib/helpers/index
  describe("test src/lib/helpers/index", () => {
    // Test createAliveStartFigures
    test("lib/helpers/index: createAliveStartFigures returns aliveFigures-Array", () => {
      expect(createAliveStartFigures()).toEqual(whiteBlackFigures);
    });
    // Test createStartFigures
    const startFigures = createStartFigures();
    test("lib/helpers/index: createStartFigures returns all figures", () => {
      expect(startFigures).toEqual(figuresAtStart);
    });
    // Test createTakenFieldsFromFigures
    const takenFields = createTakenFieldsFromFigures(startFigures);
    test("lib/helpers/index: createTakenFieldsFromFigures returns all figures", () => {
      expect(takenFields).toEqual(takenFieldsAtStart);
    });
    // Test createBoardFromTakenFields
    const board = createBoardFromTakenFields(takenFields);
    test("lib/helpers/index: createBoardFromTakenFields returns correct board", () => {
      expect(board).toEqual(boardAtStart);
    });
  });
});
