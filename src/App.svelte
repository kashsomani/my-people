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
  .background{
    z-index:-1;
    @apply fixed bg-blue-400 inset-0 ;
  }
  main{
    @apply font-semibold grid grid-cols-1 place-items-center pb-2;
  }
  .red-border{
    @apply p-4 border-2 border-black rounded-lg;
  }
  .text-primary{
    @apply text-gray-800;
  }
  input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active  {
  background:transparent;
  -webkit-box-shadow: 0 0 0 30px #93C5FD inset !important;
}
</style>
