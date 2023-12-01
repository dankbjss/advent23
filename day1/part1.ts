import { getLinesFromFile } from "../infrastructure/get-lines-frome-file";

export const extractFirstAndLastDigitFromLine = (line: string): number => {
  const filteredLine = line.split("").filter(character => character.match(/\d/));
  
  return parseInt(`${filteredLine[0]}${filteredLine[filteredLine.length - 1]}`);
};

export const getTotalCalibrationValues = (lines: string[]): number => {
  let totalCalibrationValues = 0;
  lines.forEach(line => totalCalibrationValues += extractFirstAndLastDigitFromLine(line));

  return totalCalibrationValues;
}

const getAnswer = async (): Promise<void> => {
  const lines = await getLinesFromFile("/home/dank/advent23/day1/input.txt");
  const calibrationValuesSum = getTotalCalibrationValues(lines);

  console.log(calibrationValuesSum);
};

// getAnswer();
