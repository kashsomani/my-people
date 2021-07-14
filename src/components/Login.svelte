<script>
  import {signIn} from '../firebase'
  $:email =""
  $:password = ""
  import {
    logged_in_store
  } from '../logged_in'
  async function signInWithCheck(email,password){
      let val = await signIn(email,password);
      if (val){
        logged_in_store.set(true)
      }
      else {
        console.log(val)
      }
  }
</script>
<div class="container">
  <p class="p-2 text-center">email</p>
  <input type="text" name="email" bind:value={email}>
  <p class="p-2 text-center">password</p>
  <input type="password" name="password" bind:value={password}>
  <button on:click={()=>{signInWithCheck(email,password)}}>Login</button>

</div>

<style>
  .container{
    @apply grid grid-cols-1 place-items-center;
  }
</style>
