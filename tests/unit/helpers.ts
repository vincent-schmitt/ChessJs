// constants
import { whiteBlackFigures } from "../../src/lib/constants";

// modules to test
import { createStartFigures } from "../../src/lib/helpers/index";

describe("unit Tests: lib/helpers", () => {
  describe("test index", () => {
    test("lib/helpers/index: createStartFigures return whiteBlackFigures-Object", () => {
      expect(createStartFigures()).toEqual(whiteBlackFigures);
    });
  });
});
