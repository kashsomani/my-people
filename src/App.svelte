<script>
  import Login from './components/Login.svelte'
  import Layout from './components/Layout.svelte'
  import {
    logged_in_store
  } from './logged_in'
  let logged_in = false
  logged_in_store.subscribe(value => {
    logged_in = value;
  });
</script>
<main class="text-primary">
  <div class="background">
  </div>
  {#if logged_in}
    <Layout/>
  {:else}
    <Login/>
  {/if}
</main>
<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  .dark-background{
    background-color:#00cdcd;
  }
  .light-background{
    background-color:#00b3b3;
  }
  .text-dark{
    color:
    #008080;
  }
  .button-background{
    background-color:#003434;
  }
  .background{
    z-index:-1;
    background-color:#006767;
    @apply fixed inset-0 ;
  }
  main{
    @apply font-semibold grid grid-cols-1 place-items-center pb-2 ;
  }
  .red-border{
    @apply p-2 border-2 border-black rounded-lg;
  }
  .text-primary{
    color:#00ffff;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active  {
  background:transparent;
  -webkit-box-shadow: 0 0 0 30px #00cdcd inset !important;
}
</style>
