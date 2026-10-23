import{readFile,readdir,stat}from"node:fs/promises";
import assert from"node:assert/strict";
const base=new URL("../public/demos/urban-insight/",import.meta.url);
const html=await readFile(new URL("index.html",base),"utf8");
for(const id of["why-built","surprised"]){const tag=html.match(new RegExp(`<section\\b[^>]*id="${id}"[^>]*>`))?.[0];assert.ok(tag&&/\bhidden(?:\s|>)/.test(tag)&&/data-placeholder/.test(tag),"Urban reflection placeholder must remain hidden: "+id);}
const css=await readFile(new URL("css/styles.css",base),"utf8");assert.match(css,/\[hidden\][^{]*\{\s*display:\s*none\s*!important/);
let total=0;for(const f of await readdir(new URL("fonts/",base)))if(f.endsWith(".woff2"))total+=(await stat(new URL("fonts/"+f,base))).size;
assert.ok(total<150000,"Urban font budget exceeded");console.log("Urban hidden-placeholder and font-budget build guards passed.");
