<script>
  import {
    people_store
  } from '../people'
  let people = [];

  import People from '../components/People.svelte'
  import Form from '../components/Form.svelte'
  import {
    fade
  } from 'svelte/transition'
  people_store.subscribe(value => {
    people = value;
  });

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
