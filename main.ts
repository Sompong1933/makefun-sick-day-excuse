// make.fun bounty: The Funniest Sick-Day Excuse
// Writes a single-line excuse (under 200 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "My laptop caught my cold — we're both staying home and neither of us is answering emails.";

// The sealed scorer only accepts 1–200 characters of non-whitespace text.
if (EXCUSE.trim().length === 0 || EXCUSE.length > 200) {
  throw new Error(
    `Excuse must be 1-200 characters, got ${EXCUSE.length}: ${JSON.stringify(EXCUSE)}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE + "\n", "utf8");
console.log(`Wrote ${EXCUSE.length}-character excuse to /output/entry.txt`);
console.log(EXCUSE);
