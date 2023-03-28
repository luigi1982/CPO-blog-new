// Hot reloading
import * as _unused from "raw-loader!./index.ejs";
// TODO: disable before publishing

import CGits from "./diagrams/different-cgits.svelte";
import CGitsRes from "./diagrams/different-cgits-residual.svelte";
import comp10vs100 from "./diagrams/comp10vs100cg.svelte";
import compTrReward from "./diagrams/comp_tr_reward.svelte";
import compTrConstraint from "./diagrams/comp_tr_constraint.svelte";

// lazily initialize any diagram below the fold. E.G:

const cgitsTag = document.getElementById("cgits-visualization");
let cgits;
cgitsTag.addEventListener("ready", () => {
	const target = cgitsTag.querySelector("#cgits-visualization-target");
	cgits = new CGits({ target });
});

const cgitsresTag = document.getElementById("residual-visualization");
let cgitsres;
cgitsresTag.addEventListener("ready", () => {
	const target = cgitsresTag.querySelector("#residual-visualization-target");
	cgitsres = new CGitsRes({ target });
});

const cgits10vs100Tag = document.getElementById("constraint-visualization");
let cgits10vs100;
cgits10vs100Tag.addEventListener("ready", () => {
	const target = cgits10vs100Tag.querySelector("#constraint-visualization-target");
	cgits10vs100 = new comp10vs100({ target });
});

const trRewardTag = document.getElementById("constraint-visualization-trust-region-reward");
let trReward;
trRewardTag.addEventListener("ready", () => {
	const target = trRewardTag.querySelector("#constraint-visualization-trust-region-reward-target");
	trReward = new compTrReward({ target });
});

const trConstraintTag = document.getElementById("constraint-visualization-trust-region-constraint");
let trConstraint;
trConstraintTag.addEventListener("ready", () => {
	const target = trConstraintTag.querySelector("#constraint-visualization-trust-region-constraint-target");
	trConstraint = new compTrConstraint({ target });
});
