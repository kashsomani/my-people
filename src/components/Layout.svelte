<script>
  import Router from 'svelte-spa-router'
  import routes from '../router'
  import {
    onMount
  } from "svelte";
  import 'firebase/auth'
  import firebase from 'firebase/app'
  import {
    people,
    getPeople,
    signOut
  } from '../firebase';
  import {
    people_store
  } from '../people'
  import {
    logged_in_store
  } from '../logged_in'

  async function get() {
    people_store.set(await getPeople());
  }

  $: logged_in = false

  $: observer = firebase.auth()
    .onAuthStateChanged(async (user) => {
      if (user) {
        logged_in = true;
      } else {
        logged_in = false;
      }
    })

  onMount(async () => {
    get();
  })
  people.onSnapshot(get)

  async function signOutCheck() {
    logged_in_store.set(await signOut())
  }
</script>
<div>
  <div class="grid grid-cols-12 place-items-center">
    <div class="col-span-3 ">
      <div class="grid grid-cols-1 place-items-center">
        <button on:click={signOutCheck}>Sign Out</button>
      </div>
    </div>
    <div class="col-span-6">
      <div class="grid grid-cols-1 place-items-center">
        <h1 class="heading">My People</h1>
      </div>
    </div>
    <div class="col-span-3">
    </div>
  </div>

  <Router {routes} />
</div>

<style>
  button {
    @apply m-4 p-4 bg-gray-700 rounded-full rounded-lg shadow-2xl text-blue-300;
  }

  .heading {
    @apply font-extrabold text-2xl text-black text-center;
  }
</style>
