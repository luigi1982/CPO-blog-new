<script>
  const len = 3;
  let count = 0;
  let hasInteracted = false;
  let cgitscons = [10,20,50,100];
  let envcons = 2;
  
  // environment 1:LunarLander, 2:CartPole
  
  function inputCcons(x) {
  	document.getElementById("LunarBoxcons").checked = false;
  	envcons = 2;
  }
  
  function inputLcons(x) {
  	document.getElementById("CartBoxcons").checked = false;
  	envcons= 1;
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
    src="images/env{envcons}cg10vs100.svg"
    alt="Interactive plot comparing behaviour of the constraint value for 10 and 100 CG-iterations"
  />
</div>
