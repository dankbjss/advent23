import { describe, expect, test } from "bun:test";
import { getLinesFromFile } from "../infrastructure/get-lines-frome-file";
import {
  MatchIndex,
  convertDigitNameToNumberString,
  getCalibrationValueFromMatchIndicies,
  getMatchIndiciesFromLine,
  getRevisedCalibrationValueTotal,
} from "./part2";


const lines = await getLinesFromFile("/home/dank/advent23/day1/test1.txt");

describe("convertDigitNameToNumberString", () => {
  test("returns the expected string digit for the given input", () => {
    [
      { value: "one", expected: "1" },
      { value: "1", expected: "1" },
      { value: "two", expected: "2" },
      { value: "2", expected: "2" },
      { value: "three", expected: "3" },
      { value: "3", expected: "3" },
      { value: "four", expected: "4" },
      { value: "4", expected: "4" },
      { value: "five", expected: "5" },
      { value: "5", expected: "5" },
      { value: "six", expected: "6" },
      { value: "6", expected: "6" },
      { value: "seven", expected: "7" },
      { value: "7", expected: "7" },
      { value: "eight", expected: "8" },
      { value: "8", expected: "8" },
      { value: "nine", expected: "9" },
      { value: "9", expected: "9" },
    ].forEach((testCase) => {
      const result = convertDigitNameToNumberString(testCase.value);
      
      expect(result).toEqual(testCase.expected);
    });
  });
});

describe("getMatchIndiciesFromLine", () => {
  test("given a string returns an array of the corresponding MatchIndicies", () => {
    const expectedMatchIndicies: MatchIndex[] = [
      { match: "two", index: 0 },
      { match: "1", index: 3 },
      { match: "nine", index: 4 },
    ];
    const result = getMatchIndiciesFromLine(lines[0]);

    expect(result).toEqual(expectedMatchIndicies);
  });

  test("given a line with overlapping number names returns an array of expected match indicies", () => {
    const line = "2eightwos";
    const expectedMatchIndicies: MatchIndex[] = [
      { match: "2", index: 0 },
      { match: "eight", index: 1 },
      { match: "two", index: 5 },
    ];

    const result = getMatchIndiciesFromLine(line);

    expect(result).toEqual(expectedMatchIndicies);
  });

  test("given 'eighthree' should extract 8 and 3", () => {
    const line = "eighthree";
    const expectedMatchIndicies: MatchIndex[] = [
      { match: "eight", index: 0 },
      { match: "three", index: 4}
    ]

    const result = getMatchIndiciesFromLine(line);

    expect(result).toEqual(expectedMatchIndicies)
  });
});

describe("getCalibrationValueFromMatchIndicies", () => {
  test("given an array of MatchIndicies returns the first and last appearing digits as a 2 digit number", () => {
    const matchIndicies = [
      { match: "two", index: 0 },
      { match: "1", index: 3 },
      { match: "nine", index: 4 },
    ];
    const result = getCalibrationValueFromMatchIndicies(matchIndicies);

    expect(result).toEqual(29);
  });

  test("given an array containing only one MatchIndex returns expected 2 digit number", () => {
    const matchIndicies = [{ match: "8", index: 1 }];

    const result = getCalibrationValueFromMatchIndicies(matchIndicies);

    expect(result).toEqual(88);
  });
});

describe("getRevisedCalibrationValueTotal", () => {
  test("given the test input returns 281", () => {
    const result = getRevisedCalibrationValueTotal(lines);

    expect(result).toEqual(281);
  });
});
