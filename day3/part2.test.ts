import { describe, expect, test } from "bun:test";
import { getLinesFromFile } from "../infrastructure/get-lines-from-file";
import { testPartNumbers, testSymbols } from "./part1.fixtures";
import { getPartNumbersAdjacentToGear, sumGearRatios } from "./part2";

const lines = await getLinesFromFile("/home/dank/advent23/day3/test.txt");

describe("getPartNumbersAdjacentToGear", () => {
  test("given the first gear present in the test input returns an array of [ 467, 35 ]", () => {
    const firstGear = testSymbols[0];
    const expectedNumbers = [ 467, 35 ];

    const result = getPartNumbersAdjacentToGear(firstGear, testPartNumbers);

    expect(result).toEqual(expectedNumbers);
  });

  test("given the second gear present in test input retuns an empty array", () => {
    const secondGear = testSymbols[2];

    const result = getPartNumbersAdjacentToGear(secondGear, testPartNumbers);

    expect(result).toEqual([]);
  })
});

describe("sumGearRatios", () => {
  test("given the test input returns 467835", () => {
    const result = sumGearRatios(lines);

    expect(result).toEqual(467835);
  });
});
