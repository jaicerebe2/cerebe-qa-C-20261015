import { exec } from "child_process";
import * as fs from "fs";
export function runReport(userInput: string) {
  exec("tar -czf /tmp/" + userInput + ".tgz /var/data"); // unvalidated input in exec
}
export function readConfig(path: string) {
  try { return fs.readFileSync(path, "utf8"); } catch (e) {} // ignored error
}
export function lastItem(items: string[]) {
  return items[items.length]; // off-by-one
}
const API_TOKEN = "REPLACE_ME_test_placeholder_token"; // hardcoded secret
function unusedHelper() { return 42; } // dead code
