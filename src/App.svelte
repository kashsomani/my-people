<script>
  import {
    onMount
  } from "svelte";
  import {
    db,
    getPeople,
    addPerson
  } from './firebase';
  const example ={name:"hi", age:903}
  $: people = [];
  onMount(async () => {
    people = await getPeople();
    console.log(people)
  })
  async function addP(person){
    await addPerson(person)
  }
</script>

<main>
  <h1>MY PEEPS</h1>


  {#if !people}
    <p>loading</p>
  {:else}
    {#each people as person}
    <div >
      {#each person as attr}
        <p>{`${attr[0]}: ${attr[1]}`}</p>
      {/each}
    </div>
    {/each}
  {/if}
  <button type="button" name="button" on:click={()=>{addPerson(example)}}>HI</button>
</main>
