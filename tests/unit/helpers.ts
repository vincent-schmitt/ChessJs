// constants
import { whiteBlackFigures } from "../../src/lib/constants";

// modules to test
import { createAliveStartFigures } from "../../src/lib/helpers/index";

describe("unit Tests: lib/helpers", () => {
  describe("test index", () => {
    test("lib/helpers/index: createStartFigures return whiteBlackFigures-Array", () => {
      expect(createAliveStartFigures()).toEqual(whiteBlackFigures);
    });
  });
});
