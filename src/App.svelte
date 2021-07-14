<script>
  import {
    onMount
  } from "svelte";
  import 'firebase/auth'
  import firebase from 'firebase/app'
  import {
    people,
    getPeople,
    signIn,
    authObserver
  } from './firebase';
  import {
    people_store
  } from './people'
  import Router from 'svelte-spa-router'
  import routes from './router'
  async function get(){
    people_store.set(await getPeople());
  }
  $:logged_in  = false
  $: observer = firebase.auth()
		.onAuthStateChanged( async ( user ) => {
			if ( user ) {
				logged_in = true;
			}
      else{
        logged_in = false;
      }
		} )

  onMount(async ()=>{
    let user = signIn("test@test.com","password");
    get();
 })
  people.onSnapshot(get)
</script>
<main class="text-primary">
  {logged_in}
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
