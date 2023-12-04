import { PartNumber, Symbol } from "./part1";

export const testPartNumbers: PartNumber[] = [
  {
    value: 467,
    columnStart: 0,
    columnEnd: 3,
    row: 0,
  },
  {
    value: 114,
    columnStart: 5,
    columnEnd: 8,
    row: 0,
  },
  {
    value: 35,
    columnStart: 2,
    columnEnd: 4,
    row: 2,
  },
  {
    value: 633,
    columnStart: 6,
    columnEnd: 9,
    row: 2,
  },
  {
    value: 617,
    columnStart: 0,
    columnEnd: 3,
    row: 4,
  },
  {
    value: 58,
    columnStart: 7,
    columnEnd: 9,
    row: 5,
  },
  {
    value: 592,
    columnStart: 2,
    columnEnd: 5,
    row: 6,
  },
  {
    value: 755,
    columnStart: 6,
    columnEnd: 9,
    row: 7,
  },
  {
    value: 664,
    columnStart: 1,
    columnEnd: 4,
    row: 9,
  },
  {
    value: 598,
    columnStart: 5,
    columnEnd: 8,
    row: 9,
  },
];

export const testSymbols: Symbol[] = [
  { value: "*", row: 1, column: 3 },
  { value: "#", row: 3, column: 6 },
  { value: "*", row: 4, column: 3 },
  { value: "+", row: 5, column: 5 },
  { value: "$", row: 8, column: 3 },
  { value: "*", row: 8, column: 5 },
];