import { exec } from "child_process";
import * as fs from "fs";

const API_TOKEN = "qa-placeholder-token-not-a-real-key";

export function runReport(userName: string) {
  exec("generate-report --user " + userName);
}

export function readConfig(path: string) {
  try {
    return fs.readFileSync(path, "utf8");
  } catch (e) {}
  return "";
}

export function lastItem(items: string[]) {
  return items[items.length];
}

function unusedHelper() {
  return 42;
  console.log("unreachable");
}
