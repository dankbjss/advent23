import { describe, expect, test } from "bun:test";
import { getLinesFromFile } from "../infrastructure/get-lines-from-file";
import {
  accumlatePossibleGameIds,
  getMaximumColourCubes,
  Game,
  isPossibleGame,
  parseGameFromLine,
} from "./part1";

const lines = await getLinesFromFile("/home/dank/advent23/day2/test.txt");

describe("getMaximumColourCubes", () => {
  const cubes = "3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green";

  test("given a line of cubes returns the correct maximum number of reds", () => {
    const result = getMaximumColourCubes(cubes, "red");

    expect(result).toEqual(4);
  });

  test("given a line of cubes returns the correct maximum number of blues", () => {
    const result = getMaximumColourCubes(cubes, "blue");

    expect(result).toEqual(6);
  });

  test("given a line of cubes returns the correct maximum number of greens", () => {
    const result = getMaximumColourCubes(cubes, "green");

    expect(result).toEqual(2);
  });
});

describe("parseFromLine", () => {
  test("given the first line of test input returns the expected Game", () => {
    const expectedGame: Game = {
      id: 1,
      blue: 6,
      red: 4,
      green: 2,
    };

    const result = parseGameFromLine(lines[0]);

    expect(result).toEqual(expectedGame);
  });
});

describe("isPossibleGame", () => {
  test("returns true given a Game with cubes equal to or less than the target count", () => {
    const possibleGame: Game = {
      id: 1,
      red: 12,
      green: 13,
      blue: 14,
    };

    const result = isPossibleGame(possibleGame);

    expect(result).toBeTrue();
  });

  test("returns false given a Game with more cubes than the target count", () => {
    const impossibleGame: Game = {
      id: 1,
      red: 13,
      green: 14,
      blue: 15,
    };

    const result = isPossibleGame(impossibleGame);

    expect(result).toBeFalse();
  });
});

describe("accumlatePossibleGameIds", () => {
  test("given the test input returns 8", () => {
    const result = accumlatePossibleGameIds(lines);

    expect(result).toEqual(8);
  });
});
