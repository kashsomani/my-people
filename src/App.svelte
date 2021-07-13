<script>
  import {
    onMount
  } from "svelte";
  import {
    getPeople
  } from './firebase';
  import {
    people_store
  } from './people'
  import Router from 'svelte-spa-router'
  import routes from './router'
  async function get(){
    people_store.set(await getPeople());
  }
  onMount(get)
</script>
<main class="text-primary">
  <Router {routes} />
</main>
<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  main{
    @apply bg-yellow-600 h-screen
  }
  .red-border{
    @apply p-4 border-2 border-gray-700 rounded-lg;
  }
  .text-primary{
    @apply text-gray-800;
  }
</style>
