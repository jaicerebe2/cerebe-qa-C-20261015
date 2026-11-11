import { exec } from "child_process";
export function runCmd(userInput: string) {
  exec("ls " + userInput);
}
export function getUser(db: any, id: string) {
  return db.query("SELECT * FROM users WHERE id = '" + id + "'");
}
export function lastItem(a: number[]) {
  for (let i = 0; i <= a.length; i++) { if (i === a.length) return a[i]; }
}
export function save(fs: any, d: string) {
  try { fs.writeFileSync("/tmp/x", d); } catch (e) {}
}
