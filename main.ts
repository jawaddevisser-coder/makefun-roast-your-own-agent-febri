// Roast Your Own Agent — entry program.
// Writes a single original roast to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt for local testing).
// Node 22, standard library only, deterministic, no network.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const line =
  "My agent apologized for the error, fixed it, apologized for the fix, then summarized the whole disaster in a cheerful bullet list like it was a win.";

// Self-check: the entry must be exactly one line of 1-200 characters.
// Fail loudly instead of writing an invalid entry.
if (line.length < 1 || line.length > 200 || line.includes('\n')) {
  console.error(
    `invalid entry line: expected one line of 1-200 characters, got ${line.length} characters`,
  );
  process.exit(1);
}

// Second check: no leading/trailing whitespace, and the UTF-8 byte size
// must also fit the gate (a multi-byte character counts as more than one byte).
const bytes = Buffer.byteLength(line, 'utf8');
if (line !== line.trim() || bytes > 200) {
  console.error(
    `invalid entry line: whitespace or ${bytes} bytes over the 200-byte cap`,
  );
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), line, 'utf8');
