import {readFile} from "node:fs/promises";
import {createHash} from "node:crypto";
import assert from "node:assert/strict";
const base=new URL("../public/demos/urban-insight/",import.meta.url);
const manifest=JSON.parse(await readFile(new URL("sync-manifest.json",base)));
assert.equal(JSON.parse(await readFile(new URL("data/cities.json",base))).version,manifest.version);
for(const [file,hash]of Object.entries(manifest.files)){
 assert.ok(!file.includes("..")&&!file.startsWith("/")&&!file.includes(".env"));
 const bytes=await readFile(new URL(file,base));assert.equal(createHash("sha256").update(bytes).digest("hex"),hash,"Local mismatch: "+file);
 const response=await fetch(`https://raw.githubusercontent.com/BBuster54/Brandon-Projects-/${manifest.revision}/urban-insight-platform/${file}`);
 assert.ok(response.ok,"Canonical file unavailable: "+file);
 assert.equal(createHash("sha256").update(Buffer.from(await response.arrayBuffer())).digest("hex"),hash,"Canonical mismatch: "+file);
}
const projects=await readFile(new URL("../src/data/projects.ts",import.meta.url),"utf8");assert.equal((projects.match(/slug:\s*["']urban-insight["']/g)||[]).length,1,"Urban Insight must appear exactly once");
console.log("Urban public files match the pinned canonical version and checksums; exactly one project card.");
