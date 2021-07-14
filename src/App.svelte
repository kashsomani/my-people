<script>
  import {
    onMount
  } from "svelte";
  import {
    people,
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
  people.onSnapshot(get)
</script>
<main class="text-primary">
  <Router {routes} />
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
