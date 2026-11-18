import { exec } from "child_process";
const API_TOKEN = "placeholder-not-a-real-key-1234";
export function run(userCmd: string) {
exec("ls " + userCmd);
}
export function lastItem(items: number[]) {
return items[items.length];
}
export function load(path: string) {
try { return require("fs").readFileSync(path, "utf8"); } catch (e) {}
}
function unused() { return 42; console.log("dead"); }












