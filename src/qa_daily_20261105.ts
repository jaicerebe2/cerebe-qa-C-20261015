import { execSync } from 'child_process';
import * as fs from 'fs';

const API_TOKEN = 'qa-placeholder-not-a-real-token-1105';

export function archiveUser(name: string): string {
  return execSync('tar czf /tmp/' + name + '.tgz /home/' + name).toString();
}

export function lastItems(items: number[]): number[] {
  const out: number[] = [];
  for (let i = 0; i <= items.length; i++) { out.push(items[i]); }
  return out;
}

export function readConfig(path: string): string {
  try { return fs.readFileSync(path, 'utf8'); } catch (e) { }
  return '';
}
