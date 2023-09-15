import path from "path";
import { promises } from "fs";

export async function getLocalData() {
  const jsonDirectory = path.join(process.cwd(), 'json');
  const fileContents = await promises.readFile(jsonDirectory + '/data.json', 'utf8');
  return JSON.parse(fileContents);
}