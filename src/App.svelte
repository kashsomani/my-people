<script>
  import {
    onMount
  } from "svelte";
  import {
    getPeople
  } from './firebase';
  import {
    people_store
  } from './store'
  import Router from 'svelte-spa-router'
  import routes from './router'
  onMount(async () => {
    people_store.set(await getPeople());
  })
</script>
<main>
  <Router {routes} />
</main>
<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  main{
    @apply bg-gray-700 h-screen text-red-400
  }
  .red-border{
    @apply p-4 border-2 border-red-400 rounded-lg;
  }
</style>
