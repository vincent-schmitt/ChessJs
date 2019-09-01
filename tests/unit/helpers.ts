// src constants
import { whiteBlackFigures } from "../../src/lib/constants";

// test constants
import {
  takenFieldsAtStart,
  figuresAtStart
} from "../../lib/returnObjects/AtStart";

// modules to test
import {
  createAliveStartFigures,
  createStartFigures,
  createTakenFieldsFromFigures
} from "../../src/lib/helpers/index";

describe("unit Tests: lib/helpers", () => {
  describe("test index", () => {
    test("lib/helpers/index: createAliveStartFigures returns aliveFigures-Array", () => {
      expect(createAliveStartFigures()).toEqual(whiteBlackFigures);
    });

    const startFigures = createStartFigures();
    describe("lib/helpers/index: createStartFigures returns all figures", () => {
      expect(startFigures).toEqual(figuresAtStart);
    });

    const takenFields = createTakenFieldsFromFigures(startFigures);
    describe("lib/helpers/index: createTakenFieldsFromFigures returns all figures", () => {
      expect(takenFields).toEqual(takenFieldsAtStart);
    });
  });
});
