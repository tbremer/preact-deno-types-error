import { render, preact } from "./deps.ts";
const { h } = preact;

console.log(render(<h1>hello, world!</h1>));