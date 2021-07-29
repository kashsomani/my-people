<script>
  import {
    signIn
  } from '../firebase'
  $: email = ""
  $: password = ""
  import {
    logged_in_store
  } from '../logged_in'
  async function signInWithCheck(email, password) {
    let val = await signIn(email, password);
    if (val) {
      logged_in_store.set(true)
    } else {
      console.log(val)
    }
  }

  function enter(event) {
    if (event.key === "Enter") {
      signInWithCheck(email, password)
    }
  }
</script>
<div class="container">
  <p class="p-2 text-center font-extrabold">EMAIL</p>
  <div class="input-container mb-2">
    <input type="text" name="email" bind:value={email} on:keydown={enter}>
  </div>
  <p class="p-2 text-center font-extrabold">PASSWORD</p>
  <div class="input-container">
    <input type="password" name="password" bind:value={password} on:keydown={enter}>
  </div>

  <div class=" m-4 embossed-button">
    <button on:click={()=>{signInWithCheck(email,password)}} class="login-button">LOGIN</button>
  </div>


</div>

<style>
  .container {
    @apply grid grid-cols-1 place-items-center;
  }
  .login-button{
    @apply font-extrabold text-xl p-2;
  }
</style>
