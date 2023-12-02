import { describe, expect, test } from "bun:test";
import { getLinesFromFile } from "../infrastructure/get-lines-from-file";
import { Game } from "./part1";
import { accumulateCubePowers, getCubePowerFromGame } from "./part2";

const lines = await getLinesFromFile("/home/dank/advent23/day2/test.txt");

describe("getCubePowerFromGame", () => {
  test("given a Game returns the expected cube power", () => {
    const game: Game = {
      id: 1,
      red: 4,
      green: 2, 
      blue: 6
    };

    const result = getCubePowerFromGame(game);

    expect(result).toEqual(48);

  });
});

describe("accumulateCubePowers", () => {
  test("given the test input returns 2286", () => {
    const result = accumulateCubePowers(lines);

    expect(result).toEqual(2286);
  });
});
