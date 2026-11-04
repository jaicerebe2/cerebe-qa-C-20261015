import { execSync } from "child_process";

export function readFileHandler(req: any, res: any) {
  const file = req.query.file;
  const out = execSync(`cat ${file}`);
  res.send(out.toString());
}

export function safeParse(s: string) {
  try {
    return JSON.parse(s);
  } catch (e) {}
}

export function sum(arr: number[]) {
  let total = 0;
  for (let i = 0; i <= arr.length; i++) {
    total += arr[i];
  }
  return total;
  console.log("unreachable");


















