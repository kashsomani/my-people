<script>
  export let people;
  import Person from './Person.svelte'
  import {
    fade
  } from 'svelte/transition'
  import {
    deletePerson
  } from '../firebase'
</script>

<div class="people">
  {#each people as person}
  <div class="person red-border grid grid-cols-1">
    <Person {person}/>
    <button on:click={()=>{deletePerson(person.id)}} class="rounded-full rounded-lg shadow-2xl p-4 font-extrabold button-background">Delete</button>
  </div>
  {/each}
</div>
<style >

  .people{
    @apply grid grid-cols-1 md:grid-cols-2 place-items-stretch p-2 gap-2;
  }
  .person{
    background-color:#008080;
    @apply grid grid-cols-1 p-1 place-items-center rounded rounded-lg shadow-2xl;
  }
</style>
