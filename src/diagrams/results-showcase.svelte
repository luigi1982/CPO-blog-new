<script>
  const len = 3;
  let count = 0;
  let hasInteracted = false;
  let cgitscons = [10,20,50,100];
  let envcons = 2;
  
  // environment 1:LunarLander, 2:CartPole
  
  //function inputCartM(x) {
  //	document.getElementById("content").innerHTML='<object type="text/html" data="html/CartM.html" ></object>';
  //}
  

</script>

<div style="display: flex; flex-direction: column; align-items: center; padding-top: 1em">
  <div style="text-align:center;">
    <input type="checkbox" id="CartM" name="CartM" value="CartM" on:input={inputCartM}>
    <label for="CartM"> CartPole, stay mid</label>
    <input type="checkbox" id="CartL" name="CartL" value="CartL" on:input={inputCartL}>
    <label for="CartL"> CartPole, go left</label>
    <input type="checkbox" id="LunarS" name="LunarS" value="LunarS" on:input={inputLunarS}>
    <label for="LunarS"> LunarLander, speed constraint</label>
    <input type="checkbox" id="LunarA" name="LunarA" value="LunarA" on:input={inputLunarA}>
    <label for="LunarA"> LunarLander, angle constraint</label>
  </div>
  <div id="content"> hello
  </div>
</div>
