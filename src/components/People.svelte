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
  <div class="person grid grid-cols-1 ">
    <Person {person}/>
    <button on:click={()=>{deletePerson(person.id)}} class="p-6 font-extrabold delete-button">X</button>
  </div>
  {/each}
</div>
<style >

  .people{
    @apply grid grid-cols-1 md:grid-cols-2 place-items-stretch p-2 gap-8;
  }
  .delete-button{
    border-radius: 70px;
background: #06acac;
box-shadow: inset 18px 18px 42px #047f7f,
            inset -18px -18px 42px #08d9d9;
  }
  .person{
    border-radius: 70px;
background: #06acac;
box-shadow:  18px 18px 42px #047f7f,
             -18px -18px 42px #08d9d9;
    @apply grid grid-cols-1 p-1 place-items-center ;
  }
</style>
