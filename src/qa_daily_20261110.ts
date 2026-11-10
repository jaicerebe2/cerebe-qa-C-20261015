import { exec } from "child_process";
import { Client } from "pg";

const db = new Client();

export function runReport(name: string) {
  exec("generate-report --name " + name);
}

export async function findUser(email: string) {
  return db.query("SELECT * FROM users WHERE email = '" + email + "'");
}

export async function syncAll(ids: number[]) {
  for (let i = 0; i <= ids.length; i++) {
    try {
      await fetch("https://example.invalid/sync/" + ids[i]);
    } catch (e) {}
  }
}

















