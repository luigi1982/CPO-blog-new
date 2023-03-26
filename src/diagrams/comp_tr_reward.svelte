<script>
  const len = 3;
  let count = 0;
  let hasInteracted = false;
  let envcons = "CartPole";
  
  // environment 1:LunarLander, 2:CartPole
  
  function inputLcons(x) {
  	document.getElementById("LunarBoxcons").checked = false;
  	envcons = "LunarLander";
  }
  
  function inputCcons(x) {
  	document.getElementById("CartBoxcons").checked = false;
  	envcons= "CartPole";
  }
</script>

<div style="display: flex; flex-direction: column; align-items: center; padding-top: 1em">
  <div style="text-align:center;">
    <input type="checkbox" id="CartBoxcons" name="CartBoxcons" value="Cart" on:input={inputCcons}>
    <label for="CartBoxcons"> CartPole</label>
    <input type="checkbox" id="LunarBoxcons" name="LunarBoxcons" value="Lunar" on:input={inputLcons}>
    <label for="LunarBoxcons"> LunarLander</label>
  </div>
  <img
    src="images/{envcons}_tr_reward.svg"
    alt="Interactive plot comparing behaviour of the constraint value for different trust region size"
  />
</div>
