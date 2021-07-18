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
  <div class="input-container">
    <input type="text" name="email" bind:value={email} on:keydown={enter}>
  </div>
  <p class="p-2 text-center font-extrabold">PASSWORD</p>
  <div class="input-container">
    <input type="password" name="password" bind:value={password} on:keydown={enter}>
  </div>

  <div class="p-6 m-4 login-container">
    <button on:click={()=>{signInWithCheck(email,password)}} class="login-button">LOGIN</button>
  </div>


</div>

<style>
  .input-container{
    border-radius: 70px;
background: #06acac;
box-shadow: inset 18px 18px 42px #047f7f,
            inset -18px -18px 42px #08d9d9;
    @apply p-4 ;
  }
  .login-container{
    border-radius: 70px;
background: #06acac;
box-shadow:  18px 18px 42px #047f7f,
             -18px -18px 42px #08d9d9;
  }
  input {
    outline: none;
    @apply bg-transparent text-center;
  }

  .container {
    @apply grid grid-cols-1 place-items-center;
  }
  .login-button{
    @apply font-extrabold text-lg;
  }
</style>
