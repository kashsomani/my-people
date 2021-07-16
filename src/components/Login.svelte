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
  <p class="p-2 text-center">EMAIL</p>
  <div class="p-4 bg-blue-300 rounded rounded-full m-2 ">
    <input type="text" name="email" bind:value={email} on:keydown={enter}>
  </div>
  <p class="p-2 text-center">PASSWORD</p>
  <div class="p-4 bg-blue-300 rounded rounded-full m-2 ">
    <input type="password" name="password" bind:value={password} on:keydown={enter}>
  </div>

  <div class="p-4 bg-blue-300 rounded rounded-full m-2">
    <button on:click={()=>{signInWithCheck(email,password)}}>LOGIN</button>
  </div>


</div>

<style>
  input {
    outline: none;
    @apply bg-transparent text-center;
  }

  .container {
    @apply grid grid-cols-1 place-items-center;
  }
</style>
