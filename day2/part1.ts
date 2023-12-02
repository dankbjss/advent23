import { getLinesFromFile } from "../infrastructure/get-lines-from-file";

export type Game = {
  id: number;
  red: number;
  blue: number;
  green: number;
};

export const getMaximumColourCubes = (
  cubes: string,
  colour: string
): number => {
  const pattern = new RegExp(`\\d+ ${colour}`, "g");

  return Math.max(
    ...Array.from(cubes.matchAll(pattern)).map((count) => {
      return parseInt(count[0].replace(` ${colour}`, ""));
    })
  );
};

export const parseGameFromLine = (line: string): Game => {
  const [gameId, cubes] = line.split(":");

  return {
    id: parseInt(gameId.replace("Game ", "")),
    red: getMaximumColourCubes(cubes, "red"),
    blue: getMaximumColourCubes(cubes, "blue"),
    green: getMaximumColourCubes(cubes, "green"),
  };
};

export const isPossibleGame = (game: Game): boolean => {
  return game.red <= 12 && game.green <= 13 && game.blue <= 14;
};

export const accumlatePossibleGameIds = (lines: string[]): number => {
  return lines
    .map((line) => parseGameFromLine(line))
    .filter((game) => isPossibleGame(game))
    .reduce((acc, cur) => acc + cur.id, 0);
};

const getAnswer = async (): Promise<void> => {
  const lines = await getLinesFromFile("/home/dank/advent23/day2/input.txt");
  const answer = accumlatePossibleGameIds(lines);
  console.log(answer);
};

// getAnswer();
