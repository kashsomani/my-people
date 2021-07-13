<script>
  export let people;
  import Person from './Person.svelte'
  import {fade} from 'svelte/transition'

</script>

<div >
  {#each people as person}
    <Person {person}/>
  {/each}
</div>
<style >
  div{
    @apply grid grid-cols-2 place-items-stretch p-6 gap-2;
  }
</style>
