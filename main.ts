// Funniest Time Machine Warning Label — make.fun bounty entry.
//
// Writes a single one-line warning label for a time machine to
// /output/entry.txt (1–120 characters, UTF-8). The label turns the
// grandfather paradox into the joke, deadpan, with the surprise saved
// for the last few words.
import { mkdirSync, writeFileSync } from "node:fs";

const LABEL =
  "WARNING: Do not kill your grandfather. He is the only one who knows the Wi-Fi password.";

if (LABEL.length > 120) {
  throw new Error(`label is ${LABEL.length} characters, over the 120 limit`);
}
if (!LABEL.trim()) {
  throw new Error("label must not be only white space");
}

// Written exactly, with no trailing newline, so the gate counts the
// label itself and nothing else.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LABEL, "utf8");
