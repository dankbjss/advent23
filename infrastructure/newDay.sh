#!/bin/bash

if [ $# -ne 1 ]; then
    echo "Usage: $0 <day_number>"
    exit 1
fi

dirName="day$1"

if [ -d "$dirName" ]; then
    echo "Directory $dirName already exists."
    exit 1
fi

partContent=$(cat << 'EOF'
import { getLinesFromFile } from "../day1/part1";

const getAnswer = async (): Promise<void> => {
  const lines = await getLinesFromFile("test.txt");

  lines.forEach(line => console.log(line));
};

getAnswer();
EOF
)

testContent=$(cat << 'EOF'
import { describe, expect, test } from "bun:test";
import { getLinesFromFile } from "../infrastructure";

const lines = await getLinesFromFile("test.txt");

describe("", () => {
  test("", () => {

  });
});

EOF
)

writeFile() {
  echo "$2" > "$1.ts"
}

mkdir -p "$dirName"
cd "$dirName" || exit

writeFile part1 "$partContent"
writeFile part1.test "$testContent"

writeFile part2 "$partContent"
writeFile part2.test "$testContent"

sed -i "s|\"test.txt\"|\"/home/dank/advent23/$dirName/test.txt\"|g" part*.ts

touch test.txt
touch input.txt

echo "Starting Advent of Brode Day $1"
