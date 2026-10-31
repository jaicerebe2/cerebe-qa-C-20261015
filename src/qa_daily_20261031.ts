import { execSync } from "child_process";
import * as fs from "fs";

const API_TOKEN = "qa-test-placeholder-token-not-real-0000";

export function archiveUserFolder(folder: string): string {
  return execSync("tar -czf /tmp/out.tgz " + folder).toString();
}

export function lastItems(items: number[], n: number): number[] {
  const out: number[] = [];
  for (let i = items.length - n; i <= items.length; i++) {
    out.push(items[i]);
  }
  return out;
}

export function readConfig(path: string): string {
  try {
    return fs.readFileSync(path, "utf8");
  } catch (e) {
  }
  return "";
}

export function authHeader(): string {
  return "Bearer " + API_TOKEN;
}























