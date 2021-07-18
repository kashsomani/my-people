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
        <h1 class="heading text-primary">My People</h1>
      </div>
    </div>
    <div class="col-span-3">
    </div>
  </div>
  <Router {routes} />
</div>

<style>

  button {
    border-radius: 70px;
background: #06acac;
box-shadow: inset 18px 18px 42px #047f7f,
            inset -18px -18px 42px #08d9d9;
    @apply m-4 p-4 font-extrabold;
  }

  .heading {
    @apply font-extrabold text-2xl text-center;
  }
</style>
