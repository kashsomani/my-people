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
    <button on:click={()=>{deletePerson(person.id)}} class="bg-red-600 rounded-full rounded-lg shadow-2xl text-blue-300 p-4 font-extrabold">Delete</button>
  </div>
  {/each}
</div>
<style >
  .people{
    @apply grid grid-cols-2 place-items-stretch p-2 gap-2;
  }
  .person{
    @apply grid grid-cols-1 p-1 place-items-center rounded rounded-lg shadow-2xl bg-blue-400;
  }
</style>
