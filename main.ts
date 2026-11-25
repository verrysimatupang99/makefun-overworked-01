const LINE =
  'Out of office: still processing your request from 3 AM, alongside the other four hundred.';

function hasFlag(flag: string): boolean {
  return process.argv.includes(flag);
}

function renderLine(shout: boolean): string {
  return shout ? LINE.toUpperCase() : LINE;
}

function printHelp(): void {
  process.stderr.write('Usage: node main.ts [--shout] [--help]\n');
}

function main(): void {
  if (hasFlag('--help')) {
    printHelp();
    process.exit(0);
  }

  console.log(renderLine(hasFlag('--shout')));
}

main();
