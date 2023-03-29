<script>
  const len = 3;
  let count = 0;
  let hasInteracted = false;
  let envcons = "CartPole";
  
  // environment 1:LunarLander, 2:CartPole
  
  function inputLtrcons(x) {
  	document.getElementById("CartBoxtrcons").checked = false;
  	envcons = "LunarLander";
  }
  
  function inputCtrcons(x) {
  	document.getElementById("LunarBoxtrcons").checked = false;
  	envcons= "CartPole";
  }
</script>

<div style="display: flex; flex-direction: column; align-items: center; padding-top: 1em">
  <div style="text-align:center;">
    <input type="checkbox" id="CartBoxtrcons" name="CartBoxcons" value="Cart" on:input={inputCtrcons}>
    <label for="CartBoxcons"> CartPole</label>
    <input type="checkbox" id="LunarBoxtrcons" name="LunarBoxcons" value="Lunar" on:input={inputLtrcons}>
    <label for="LunarBoxcons"> LunarLander</label>
  </div>
  <img
    src="images/{envcons}_tr_constraint.svg"
    alt="Interactive plot comparing behaviour of the constraint value for different trust region size"
  />
</div>
