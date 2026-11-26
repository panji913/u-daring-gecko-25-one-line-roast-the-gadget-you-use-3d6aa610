// One-Line Roast: The Gadget You Use Every Day
// make.fun competition: u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610
//
// Writes a single original roast line (<= 200 characters) to /output/entry.txt.
// The line roasts the earbuds used every day: the box promises eight hours,
// the buds themselves quit mid-sentence.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "My earbuds promise eight hours of battery, then die mid-sentence like a gossip who heard the good part and left.";

const OUT = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters; must be 1-200`);
}
if (!ENTRY.trim()) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to ${OUT}`);
