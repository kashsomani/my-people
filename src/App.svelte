<script>
  import {
    onMount
  } from "svelte";
  import {
    db,
    getPeople
  } from './firebase';
  $: people = [];
  $: people2 = [];
  onMount(async () => {
    people2 = await getPeople();
    console.log(people2)
  })
</script>

<main>
  <h1>MY PEEPS</h1>


  {#if !people2}
    <p>loading</p>
  {:else}
    {#each people2 as person}
    <div >
      {#each person as attr}
        <p>{`${attr[0]}: ${attr[1]}`}</p>
      {/each}
    </div>
    {/each}
  {/if}
</main>
