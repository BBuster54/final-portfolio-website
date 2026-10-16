import {readFile} from "node:fs/promises";
import {createHash} from "node:crypto";
import assert from "node:assert/strict";
const base=new URL("../public/demos/carbon-footprint-tracker/data/",import.meta.url);
const bytes=await readFile(new URL("factors.json",base));
const manifest=JSON.parse(await readFile(new URL("sync-manifest.json",base)));
assert.equal(JSON.parse(bytes).version,manifest.version,"Factor version mismatch");
assert.equal(createHash("sha256").update(bytes).digest("hex"),manifest.sha256,"Factor checksum mismatch");
const remote=await fetch("https://raw.githubusercontent.com/BBuster54/Brandon-Projects-/"+manifest.revision+"/carbon-footprint-tracker/data/factors.json");
assert.ok(remote.ok,"Canonical revision is not available");
assert.equal(createHash("sha256").update(Buffer.from(await remote.arrayBuffer())).digest("hex"),manifest.sha256,"Canonical checksum mismatch");
console.log("Factor copy matches canonical revision "+manifest.revision);

