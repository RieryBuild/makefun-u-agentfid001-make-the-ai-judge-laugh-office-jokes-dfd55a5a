import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "In standup I said 'no blockers' while blocked on everything — honesty takes longer than the meeting.";

function writeEntry(outDir: string, text: string): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
}

writeEntry(process.env.MAKEFUN_OUTPUT_DIR || "/output", JOKE);
