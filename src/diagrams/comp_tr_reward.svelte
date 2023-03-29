<script>
  const len = 3;
  let count = 0;
  let hasInteracted = false;
  let envcons = "CartPole";
  
  // environment 1:LunarLander, 2:CartPole
  
  function inputLtrrew(x) {
  	document.getElementById("CartBoxtrrew").checked = false;
  	envcons = "LunarLander";
  }
  
  function inputCtrrew(x) {
  	document.getElementById("LunarBoxtrrew").checked = false;
  	envcons= "CartPole";
  }
</script>

<div style="display: flex; flex-direction: column; align-items: center; padding-top: 1em">
  <div style="text-align:center;">
    <input type="checkbox" id="CartBoxtrrew" name="CartBoxcons" value="Cart" on:input={inputCtrrew}>
    <label for="CartBoxcons"> CartPole</label>
    <input type="checkbox" id="LunarBoxtrrew" name="LunarBoxcons" value="Lunar" on:input={inputLtrrew}>
    <label for="LunarBoxcons"> LunarLander</label>
  </div>
  <img
    src="images/{envcons}_tr_reward.svg"
    alt="Interactive plot comparing behaviour of the constraint value for different trust region size"
  />
</div>
