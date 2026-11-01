import { Pool } from "pg";
import * as fs from "fs";

const DB_PASSWORD = "qa-placeholder-not-a-real-password-1101";
const pool = new Pool({ user: "app", password: DB_PASSWORD });

export async function findOrders(customerName: string) {
  const sql = "SELECT * FROM orders WHERE customer = '" + customerName + "'";
  return pool.query(sql);
}

export function saveReport(path: string, body: string) {
  fs.writeFile(path, body, () => {});
}

export function sumFirst(values: number[], n: number): number {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += values[i];
  }
  return total;
}

function legacyFormat(v: number): string {
  return v.toFixed(2);
}
