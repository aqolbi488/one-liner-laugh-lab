// One-Liner Laugh Lab — the excuse a robot vacuum gives after eating a sock.
// Deterministic: writes the same single line on every run. No network, no
// environment values, no files outside this repo.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "It was a single sock, alone on the floor. I adopted it — into my dustbin.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
