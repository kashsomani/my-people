<script>
  import {
    people_store
  } from '../store'
  let people = [];
  import {
    addPerson
  } from '../firebase'
  import People from '../components/People.svelte'
  import Form from '../components/Form.svelte'
  import {
    fade
  } from 'svelte/transition'
  const example = {
    name: "hi",
    age: 903
  }
  people_store.subscribe(value => {
    people = value;
  });
  async function addP(person) {
    await addPerson(person)
  }
</script>
<div>
  <h1>MY PEEPS</h1>
  {#if !people}
    <p>loading</p>
  {:else}
  <div transition:fade="{{duration:1500}}">
    <People {people}/>
  </div>
  <Form/>
  <div transition:fade="{{duration:2000}}">
    <button on:click={()=>{addPerson(example)}}>
      HI
    </button>
  </div>
  {/if}
</div>
<style >
  h1{
    @apply text-2xl
  }
  div{
    @apply grid grid-cols-1 place-items-center;
  }
</style>
