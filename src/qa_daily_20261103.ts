import { execSync } from 'child_process';
const API_TOKEN = 'qa-placeholder-token-not-real-1234';
export function archive(userPath: string) { return execSync('tar czf out.tgz ' + userPath); }
export function lastItems(a: number[]) { const r: number[] = []; for (let i = 0; i <= a.length; i++) { r.push(a[i]); } return r; }
export async function load(p: Promise<string>) { try { return await p; } catch (e) { } }
export function flag() { return true; console.log('unreachable'); }
