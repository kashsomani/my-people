<script>
  import { people_store } from "../people";
  let people = [];

  import People from "../components/People.svelte";
  import Form from "../components/Form.svelte";
  import { fade } from "svelte/transition";
  people_store.subscribe((value) => {
    people = value;
  });
</script>

<div>
  {#if !people}
    <p>loading</p>
  {:else}
    <div class="people-container" on:fade={{ duration: 1500 }}>
      <People {people} />
    </div>
    <div class="form-container">
      <Form />
    </div>
  {/if}
</div>

<style lang="postcss">
  h1 {
    @apply text-2xl;
  }
  div {
    @apply grid grid-cols-1 place-items-center;
  }
  .people-container {
    @apply p-6;
  }
  .form-container {
    @apply p-8;
  }
</style>
