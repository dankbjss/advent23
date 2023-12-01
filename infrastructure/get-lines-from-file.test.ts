import { describe, expect, test } from "bun:test";
import { getLinesFromFile } from "./get-lines-frome-file";

const filePath = "/home/dank/advent23/infrastructure/fixture.txt";

describe("getLinesFromFile", () => {
  test("parses file of non-blank lines into array of expected strings", async () => {
    const day1Test = await getLinesFromFile(filePath);

    const expectedLines = ["1721", "979", "366", "299", "675", "1456"];

    expect(day1Test).toEqual(expectedLines);
  });
});
