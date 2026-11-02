import { readFileSync } from "fs";
import * as path from "path";

const API_KEY = "PLACEHOLDER_NOT_A_REAL_KEY_123";

export function readUserFile(name: string): string {
  return readFileSync(path.join("/var/data", name), "utf8");
}

export function calc(expr: string): number {
  return eval(expr);
}

export function lastItems(items: number[]): number[] {
  const out: number[] = [];
  for (let i = 0; i <= items.length; i++) out.push(items[i]);
  return out;
}

export function ping(url: string): void {
  fetch(url, { headers: { "x-api-key": API_KEY } });
}
