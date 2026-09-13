import { cp, mkdir, rm, readdir, stat } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const out = join(root, "dist");

const excluded = new Set([
  "dist",
  "node_modules",
  ".git",
  ".vercel"
]);

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });

for (const name of await readdir(root)) {
  if (excluded.has(name)) continue;

  const src = join(root, name);
  const dst = join(out, name);
  const info = await stat(src);

  if (info.isDirectory()) {
    await cp(src, dst, { recursive: true });
  } else {
    await cp(src, dst);
  }
}

console.log("Purity Haus production site created in dist/");
