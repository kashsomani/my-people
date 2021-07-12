<script>
  import {
    onMount
  } from "svelte";
  import {
    db
  } from './firebase';
    $: people = [];
  onMount(async ()=>{
    let uid = "Zr82sLpVm2KcNf5lsVCk";
    const peopleRef = db.collection('people').doc('Zr82sLpVm2KcNf5lsVCk');
    const doc = await peopleRef.get();
    people = Object.entries(doc.data());
    console.log(people)
  })
</script>

<main>
  <h1>Svelte + Node.js API</h1>
  <h2>
    Deployed with
    <a href="https://vercel.com/docs" target="_blank" rel="noreferrer noopener">
      Vercel
    </a>
    !
  </h2>
  <p>
    <a href="https://github.com/vercel/vercel/tree/main/examples/svelte" target="_blank" rel="noreferrer noopener">
      This project
    </a>
    is a
    <a href="https://svelte.dev/">Svelte</a>
    app with three directories,
    <code>/public</code>
    for static assets,
    <code>/src</code>
    for components and content, and
    <code>/api</code>
    which contains a serverless
    <a href="https://nodejs.org/en/">Node.js</a>
    function. See
    <a href="/api/date">
      <code>api/date</code>
      for the Date API with Node.js
    </a>
    <br />
  <h2>The date according to Node.js is:</h2>
  {#if !people}
    <p>loading</p>
  {:else}
    {#each people as person}
      <p>{person[0]}: {person[1]}</p>
    {/each}
  {/if}
</main>
