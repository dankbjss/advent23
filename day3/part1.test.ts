import { describe, expect, test } from "bun:test";
import { getLinesFromFile } from "../infrastructure/get-lines-from-file";
import {
  getAllPartNumbersFromInput,
  getAllSymbolsFromInput,
  getPartNumbersFromLine,
  getSymbolFromLine,
  inRange,
  isValidPartNumber,
  sumValidPartNumbers,
} from "./part1";
import { testPartNumbers, testSymbols } from "./part1.fixtures";

const lines = await getLinesFromFile("/home/dank/advent23/day3/test.txt");

describe("getPartNumbersFromLine", () => {
  test("given the first line of input returns an array of the 2 expected PartNumbers", () => {
    const result = getPartNumbersFromLine(lines[0], 0);

    expect(result).toEqual(testPartNumbers.slice(0, 2));
  });
});

describe("getAllPartNumbersFromInput", () => {
  test("given the test input returns the expected array of PartNumbers", () => {
    const result = getAllPartNumbersFromInput(lines);

    expect(result).toEqual(testPartNumbers);
  });
});

describe("getSymbolFromLine", () => {
  test("given the second line of test input retruns an array comtaining the expected Symbol", () => {
    const result = getSymbolFromLine(lines[1], 1);

    expect(result).toEqual(testSymbols.slice(0, 1));
  });
});

describe("getAllSymbolsFromInput", () => {
  test("given the test input returns the expected array of Symbols", () => {
    const result = getAllSymbolsFromInput(lines);

    expect(result).toEqual(testSymbols);
  });
});

describe("inRange", () => {
  test("Returns true give a value of 1, start of 0 and end of 3", () => {
    const result = inRange(1, 0, 3);

    expect(result).toBeTrue();
  })

  test("Returns false give a value of 5, start of 0 and end of 3", () => {
    const result = inRange(5, 0, 3);

    expect(result).toBeFalse();
  });
})


describe("isValidPartNumber", () => {
  test("returns true given the first testPartNumber", () => {
    const result = isValidPartNumber(testPartNumbers[0], testSymbols);

    expect(result).toBeTrue();
  });

  test("returns false given the second testPartNumber", () => {
    const result = isValidPartNumber(testPartNumbers[1], testSymbols);

    expect(result).toBeFalse();
  });
});

describe("sumValidPartNumbers", () => {
  test("given the test input returns 4361", () => {
    const result = sumValidPartNumbers(lines);

    expect(result).toEqual(4361);
  })
})
