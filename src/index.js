// Hot reloading
import * as _unused from "raw-loader!./index.ejs";
// TODO: disable before publishing

import Example from "./diagrams/svelte-example.svelte";
import CGits from "./diagrams/different-cgits.svelte";

// lazily initialize any diagram below the fold. E.G:
const exampleTag = document.getElementById("svelte-example-dfigure");
let example;
exampleTag.addEventListener("ready", () => {
	const target = exampleTag.querySelector("#svelte-example-target");
	example = new Example({ target });
});

const cgitsTag = document.getElementById("cgits-visualization");
let cgits;
cgitsTag.addEventListener("ready", () => {
	const target = cgitsTag.querySelector("#cgits-visualization-target");
	cgits = new CGits({ target });
});
