import { execSync } from "child_process";
import { readFileSync } from "fs";

const API_TOKEN = "PLACEHOLDER-not-a-real-token-1116";

export function runReport(name: string) {
  return execSync("tar czf /tmp/" + name + ".tgz /var/data/" + name).toString();
}

export function lastItem(items: string[]) {
  for (let i = 0; i <= items.length; i++) {
    if (i === items.length) return items[i];
  }
}

export function loadConfig(path: string) {
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch (e) {}
}

function unusedHelper() {
  return 42;
  console.log("never reached");
}
