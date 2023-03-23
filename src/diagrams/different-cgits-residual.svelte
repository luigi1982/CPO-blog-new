<script>
  const len = 3;
  let count = 0;
  let hasInteracted = false;
  let cgitsres = [10,20,50,100];
  let envres = 2;

  // function for updating count on input
  function inputRes(x) {
    if (!hasInteracted) {
      hasInteracted = true;
    }
    count = parseInt(x.target.value);
  }
  
  // environment 1:LunarLander, 2:CartPole
  
  function inputCRes(x) {
  	document.getElementById("LunarBoxRes").checked = false;
  	envres = 2;
  }
  
  function inputLRes(x) {
  	document.getElementById("CartBoxRes").checked = false;
  	envres= 1;
  }
</script>

<div style="display: flex; flex-direction: column; align-items: center; padding-top: 1em">
  <div style="text-align:center;">
    <input type="checkbox" id="CartBoxRes" name="CartBoxRes" value="Cart" on:input={inputCRes}>
    <label for="CartBoxRes"> CartPole</label>
    <input type="checkbox" id="LunarBoxRes" name="LunarBoxRes" value="Lunar" on:input={inputLRes}>
    <label for="LunarBoxRes"> LunarLander</label>
  </div>
  <img
    src="images/residual_env{envres}cg{cgitsres[count]}.svg"
    alt="Interactive plot displaying residual and relative forward error for different numbers of CG-iterations within each iteration"
  />
  <div style="text-align:center;">
    <p>Learning progress for {cgitsres[count]} CG-iterations</p>
    <input type="range" min="0" max="{len}" value="0" on:input={inputRes}>
    <p style="transition: 1s opacity; {hasInteracted && 'opacity: 0;'}">Move the slider to change the number of CG iterations!</p>
  </div>
</div>
