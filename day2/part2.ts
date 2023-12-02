import { getLinesFromFile } from "../infrastructure/get-lines-from-file";
import { Game, parseGameFromLine } from "./part1";

export const getCubePowerFromGame = (game: Game): number => {
  return game.red * game.green * game.blue;
};

export const accumulateCubePowers = (lines: string[]): number => {
  return lines
    .map((line) => parseGameFromLine(line))
    .map((game) => getCubePowerFromGame(game))
    .reduce((acc, cur) => acc + cur, 0);
};

const getAnswer = async (): Promise<void> => {
  const lines = await getLinesFromFile("/home/dank/advent23/day2/input.txt");
  const answer = accumulateCubePowers(lines);

  console.log(answer);
};

getAnswer();
