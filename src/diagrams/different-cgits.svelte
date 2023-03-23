<script>
  const len = 3;
  let count = 0;
  let hasInteracted = false;
  let cgits = [10,20,50,100];
  let env = 2;

  // function for updating count on input
  function input(x) {
    if (!hasInteracted) {
      hasInteracted = true;
    }
    count = parseInt(x.target.value);
  }
  
  // environment 1:LunarLander, 2:CartPole
  
  function inputC(x) {
  	document.getElementById("LunarBox").checked = false;
  	env = 2;
  }
  
  function inputL(x) {
  	document.getElementById("CartBox").checked = false;
  	env= 1;
  }
</script>

<div style="display: flex; flex-direction: column; align-items: center; padding-top: 1em">
  <div style="text-align:center;">
    <input type="checkbox" id="CartBox" name="CartBox" value="Cart" on:input={inputC}>
    <label for="CartBox"> CartPole</label>
    <input type="checkbox" id="LunarBox" name="LunarBox" value="Lunar" on:input={inputL}>
    <label for="LunarBox"> LunarLander</label>
  </div>
  <img
    src="images/learning_prog_env{env}cg{cgits[count]}.svg"
    alt="Interactive plot displaying learning progress for different numbers of CG-iterations within each iteration"
  />
  <div style="text-align:center;">
    <p>Learning progress for {cgits[count]} CG-iterations</p>
    <input type="range" min="0" max="{len}" value="0" on:input={input}>
    <p style="transition: 1s opacity; {hasInteracted && 'opacity: 0;'}">Move the slider to change the number of CG iterations!</p>
  </div>
</div>
