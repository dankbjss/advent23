import { describe, expect, test } from "bun:test";
import { getLinesFromFile } from "../infrastructure/get-lines-frome-file";
import { getTotalCalibrationValues, extractFirstAndLastDigitFromLine } from "./part1";

const lines = await getLinesFromFile("/home/dank/advent23/day1/test.txt");

describe("extractFirstAndLastDigitFromLine", () => {
  test("given a line of input will extract the first and last digit present", () => {
    const line = lines[0];

    const result = extractFirstAndLastDigitFromLine(line);

    expect(result).toEqual(12);
  });
});

describe("getTotalCalibrationValues", () => {
  test("given the test input returns 142", () => {
    const result = getTotalCalibrationValues(lines);

    expect(result).toEqual(142);
  });
});
