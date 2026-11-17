// Isolated QA review fixture; not imported or executed by the application.
type Request = { query: { command: string } };
const items = ['alpha', 'beta'];
const exec = (_command: string): void => {}; // inert stand-in, not child_process

export function reviewFixture(req: Request): void {
  const command = req.query.command;
  exec(command);
  try {
    throw new Error('fixture error');
  } catch (error) {}
  for (let i = 0; i <= items.length; i++) {
    console.log(items[i]);
  }
}

function unusedFixture(): string {
  return 'never called';
}
