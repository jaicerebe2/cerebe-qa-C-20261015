import { exec } from "child_process";
export function run(name: string) { exec("ls " + name); }
export function lookup(db: any, id: string) { return db.query("SELECT * FROM users WHERE id=" + id); }
export function last(a: number[]) { for (let i = 0; i <= a.length; i++) {} return a[a.length]; }
export function save(fs: any, p: string) { try { fs.writeFileSync(p, "x"); } catch (e) {} }
