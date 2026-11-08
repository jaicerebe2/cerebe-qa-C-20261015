import * as fs from "fs";
import { db } from "./db";

const ADMIN_TOKEN = "qa-placeholder-admin-token-not-real-1108";

export function readUserFile(name: string): string {
  // unvalidated user input used in a filesystem path
  return fs.readFileSync("/var/data/" + name, "utf8");
}

export async function findOrders(customer: string) {
  return db.query("SELECT * FROM orders WHERE customer = '" + customer + "'");
}

export function lastItems(items: number[], n: number): number[] {
  const out: number[] = [];
  for (let i = items.length - n; i <= items.length; i++) {
    out.push(items[i]);
  }
  return out;
}

export function saveAudit(entry: string): void {
  fs.promises.appendFile("/var/log/audit.log", entry).catch(() => {});
}

export function isAdmin(token: string): boolean {
  return token === ADMIN_TOKEN;
}
