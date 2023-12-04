import { getLinesFromFile } from "../infrastructure/get-lines-from-file";
import {
  getAllPartNumbersFromInput,
  getAllSymbolsFromInput,
  inRange,
  PartNumber,
  Symbol,
} from "./part1";

export const getPartNumbersAdjacentToGear = (
  gear: Symbol,
  partNumbers: PartNumber[]
): number[] => {
  const adjacentPartNumbers = partNumbers
    .filter((partNumber) => {
      return inRange(gear.row, partNumber.row - 1, partNumber.row + 1);
    })
    .filter((partNumber) => {
      if (partNumber.row === gear.row) {
        return (
          gear.column === partNumber.columnStart - 1 ||
          gear.column === partNumber.columnEnd
        );
      } else {
        return inRange(
          gear.column,
          partNumber.columnStart - 1,
          partNumber.columnEnd
        );
      }
    })
    .map((partNumber) => partNumber.value);

  if (adjacentPartNumbers.length === 2) return adjacentPartNumbers;
  return [];
};

export const sumGearRatios = (lines: string[]): number => {
  const partNumbers = getAllPartNumbersFromInput(lines);
  const gears = getAllSymbolsFromInput(lines).filter(
    (symbol) => symbol.value === "*"
  );
  let gearRatios: number[] = [];
  gears.forEach((gear) => {
    const parts = getPartNumbersAdjacentToGear(gear, partNumbers);
    if (parts.length !== 0) gearRatios.push(parts[0] * parts[1]);
  });
  
  return gearRatios.reduce((previous, current) => previous + current, 0);
};

const getAnswer = async (): Promise<void> => {
  const lines = await getLinesFromFile("/home/dank/advent23/day3/input.txt");

  console.log(sumGearRatios(lines))
};

getAnswer();
