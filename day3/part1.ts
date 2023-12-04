import { getLinesFromFile } from "../infrastructure/get-lines-from-file";

export type PartNumber = {
  value: number;
  columnStart: number;
  columnEnd: number;
  row: number;
};

export type Symbol = {
  value: string;
  row: number;
  column: number;
};

export const getPartNumbersFromLine = (
  line: string,
  row: number
): PartNumber[] => {
  const numberPattern = new RegExp(/\d+/dgi);
  let partNumbers: PartNumber[] = [];
  let numberMatches: RegExpExecArray | null;

  while ((numberMatches = numberPattern.exec(line)) !== null) {
    const engineNumber: PartNumber = {
      value: parseInt(numberMatches[0]),
      columnStart: numberMatches.indices![0][0],
      columnEnd: numberMatches.indices![0][1],
      row: row,
    };
    partNumbers.push(engineNumber);
  }

  return partNumbers;
};

export const getAllPartNumbersFromInput = (lines: string[]): PartNumber[] => {
  let partNumbers: PartNumber[] = [];
  lines.forEach((line, row) => {
    partNumbers.push(...getPartNumbersFromLine(line, row));
  });

  return partNumbers;
};

export const getSymbolFromLine = (line: string, row: number): Symbol[] => {
  const symbolPattern = new RegExp(/(\*|#|%|@|\+|\$|=|\/|&|-)/dgi);
  let symbols: Symbol[] = [];
  let symbolMatches: RegExpExecArray | null;

  while ((symbolMatches = symbolPattern.exec(line)) !== null) {
    const symbol: Symbol = {
      value: symbolMatches[0],
      row: row,
      column: symbolMatches.indices![0][0],
    };
    symbols.push(symbol);
  }

  return symbols;
};

export const getAllSymbolsFromInput = (lines: string[]): Symbol[] => {
  let symbols: Symbol[] = [];
  lines.forEach((line, row) => {
    symbols.push(...getSymbolFromLine(line, row));
  });

  return symbols;
};

export const inRange = (
  integer: number,
  start: number,
  end: number
): boolean => {
  return integer >= start && integer <= end;
};

export const isValidPartNumber = (
  partNumber: PartNumber,
  symbols: Symbol[]
): boolean => {
  return symbols
    .filter((symbol) => {
      return inRange(symbol.row, partNumber.row - 1, partNumber.row + 1);
    })
    .some((symbol) => {
      if (partNumber.row === symbol.row) {
        return (
          symbol.column === partNumber.columnStart - 1 ||
          symbol.column === partNumber.columnEnd
        );
      } else {
        return inRange(
          symbol.column,
          partNumber.columnStart - 1,
          partNumber.columnEnd
        );
      }
    });
};

export const sumValidPartNumbers = (lines: string[]): number => {
  const partNumbers = getAllPartNumbersFromInput(lines);
  const symbols = getAllSymbolsFromInput(lines);

  return partNumbers
    .filter((partNumber) => {
      return isValidPartNumber(partNumber, symbols);
    })
    .map((partNumber) => partNumber.value)
    .reduce((previous, current) => previous + current, 0);
};

const getAnswer = async (): Promise<void> => {
  const lines = await getLinesFromFile("/home/dank/advent23/day3/input.txt");
  console.log(sumValidPartNumbers(lines))
  
};

// getAnswer();
