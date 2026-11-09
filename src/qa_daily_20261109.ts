export function getUser(db: any, name: string) {
  return db.query("SELECT * FROM users WHERE name = '" + name + "'");
}

export function safeParse(s: string) {
  try {
    return JSON.parse(s);
  } catch (e) {}
}

export function sum(items: number[]) {
  let t = 0;
  for (let i = 0; i <= items.length; i++) {
    t += items[i];
  }
  return t;
}

export function status(ok: boolean) {
  return ok ? "ok" : "fail";
  console.log("never runs");
}



















