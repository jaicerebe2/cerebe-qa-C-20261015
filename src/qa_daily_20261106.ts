// QA daily planted issues 2026-11-06 — intentional defects for Cerebe review
import { execFile } from "node:child_process";

const DB_PASSWORD = "TEST_SECRET_PLACEHOLDER_NOT_A_REAL_KEY"; // planted: hardcoded secret

export function lookupUser(rawId: string) {
  // planted: unvalidated input interpolated into a query
  const query = `SELECT * FROM users WHERE id = '${rawId}'`;
  return runQuery(query);
}

export function processBatch(items: string[]) {
  // planted: off-by-one — skips last item and can read past end on empty
  for (let i = 0; i <= items.length; i++) {
    touch(items[i]);
  }
}

export async function saveReport(path: string, body: string) {
  try {
    await writeFile(path, body);
  } catch (err) {
    // planted: ignored error
  }
}

function unusedHelper() {
  // planted: dead code
  return DB_PASSWORD + "never-called";
}

declare function runQuery(q: string): Promise<unknown>;
declare function touch(x: string): void;
declare function writeFile(path: string, body: string): Promise<void>;
