export const getLinesFromFile = async (filePath: string): Promise<string[]> => {
  const file = await Bun.file(filePath).text();
  const lines = file.split("\n");

  return lines;
};
