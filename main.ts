// Charm the Commuter — one-line weather forecast for a city that isn't.
// Writes a single entry (<= 140 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Good morning, Puddleton: light rain, 16°C, and your bus is on time for once — even the clouds kept a promise.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(`Wrote ${entry.length} chars to /output/entry.txt`);
console.log(entry);
