// Funniest Autocorrect Fail — make.fun bounty u-zeroxfive-funniest-autocorrect-fail-ddf82154
// Writes a single line (1-199 chars), a funny autocorrect fail, to entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The entry line: a work group-chat message where autocorrect swaps the
// harmless celebration supply ("stickers") for something HR will definitely
// notice ("strippers"). The frantic all-caps correction plus the dawning
// horror that HR is on the thread is the tell — the sender knows exactly
// what just went out, and so does everyone replying-all.
const ENTRY: string =
  "Team, the client signed! To celebrate, I've ordered strippers for the office party — I meant STICKERS. HR is on this thread, please stop replying-all.";

function main(): void {
  const chars = [...ENTRY];
  if (chars.length < 1 || chars.length > 199) {
    throw new Error(`entry must be 1-199 characters, got ${chars.length}`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(join(OUTPUT_DIR, "entry.txt"), ENTRY, "utf8");
  console.log(`wrote entry.txt (${chars.length} chars)`);
}

main();
