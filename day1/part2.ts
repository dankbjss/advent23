import { getLinesFromFile } from "../infrastructure/get-lines-from-file";

export type MatchIndex = {
  match: string;
  index: number;
};

export const convertDigitNameToNumberString = (digit: string): string => {
  switch (digit) {
    case "one":
    case "1":
      return "1";

    case "two":
    case "2":
      return "2";

    case "three":
    case "3":
      return "3";

    case "four":
    case "4":
      return "4";

    case "five":
    case "5":
      return "5";

    case "six":
    case "6":
      return "6";

    case "seven":
    case "7":
      return "7";

    case "eight":
    case "8":
      return "8";

    case "nine":
    case "9":
      return "9";

    default:
      throw new Error("Unexpected item in bagging area");
  }
};

export const getMatchIndiciesFromLine = (line: string): MatchIndex[] => {
  const numberPattern: RegExp =
    /(?=(\d|one|two|three|four|five|six|seven|eight|nine))/g;

  return Array.from(line.matchAll(numberPattern)).map((match) => {
    return { match: match[1], index: match.index! };
  });
};

export const getCalibrationValueFromMatchIndicies = (
  matches: MatchIndex[]
): number => {
  const sortedMatches = matches.toSorted((a, b) => a.index - b.index);
  const digit1 = convertDigitNameToNumberString(sortedMatches[0].match);
  const digit2 = convertDigitNameToNumberString(
    sortedMatches[sortedMatches.length - 1].match
  );

  return parseInt(`${digit1}${digit2}`);
};

export const getRevisedCalibrationValueTotal = (lines: string[]): number => {
  let calibrationTotal = 0;
  lines.forEach((line) => {
    const matchIndicies = getMatchIndiciesFromLine(line);
    calibrationTotal += getCalibrationValueFromMatchIndicies(matchIndicies);
  });

  return calibrationTotal;
};

const getAnswer = async (): Promise<void> => {
  const lines = await getLinesFromFile("/home/dank/advent23/day1/input.txt");
  const calibrationTotal = getRevisedCalibrationValueTotal(lines);

  console.log(calibrationTotal);
};

getAnswer();
