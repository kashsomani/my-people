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

  async function get(){
    people_store.set(await getPeople());
  }

  $:logged_in  = false

  $:observer = firebase.auth()
		.onAuthStateChanged( async ( user ) => {
			if ( user ) {
				logged_in = true;
			}
      else{
        logged_in = false;
      }
		} )

  onMount(async ()=>{
    get();
 })
  people.onSnapshot(get)

  async function signOutCheck(){
    logged_in_store.set(await signOut())
  }
</script>
<div >
  <button on:click={signOutCheck}>Sign Out</button>
  <Router {routes} />
</div>
