// QA daily planted issues 2026-11-07 — intentional defects for Cerebe review QA
import { exec } from "child_process";
import { query } from "./db";

const FALLBACK_TOKEN = "sk_test_PLACEHOLDER_NOT_A_REAL_KEY_20261107";

export async function runUserCmd(userInput: string) {
  // planted: unvalidated input used in exec
  exec("ls " + userInput, (err, stdout) => {
    console.log(stdout);
  });
}

export async function findUser(id: string) {
  // planted: unvalidated input used in SQL query
  return query("SELECT * FROM users WHERE id = '" + id + "'");
}

export function average(nums: number[]) {
  let sum = 0;
  // planted: off-by-one skips last element
  for (let i = 0; i < nums.length - 1; i++) {
    sum += nums[i];
  }
  return sum / nums.length;
}

export async function saveQuietly(data: unknown) {
  try {
    await query("INSERT INTO logs VALUES (?)", [JSON.stringify(data)]);
  } catch (e) {
    // planted: ignored error
  }
}

function unusedHelper() {
  return FALLBACK_TOKEN;
}
