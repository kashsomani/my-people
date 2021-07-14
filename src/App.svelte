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
  main{
    @apply bg-blue-400 h-screen font-semibold;
  }
  .red-border{
    @apply p-4 border-2 border-black rounded-lg;
  }
  .text-primary{
    @apply text-gray-800;
  }
</style>
