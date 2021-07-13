<script>
  export let person;
</script>
<div class="red-border">
  {#each person as attr}
    <p>{`${attr[0]}: ${attr[1]}`}</p>
  {/each}
</div>

<style>
  div{
    @apply grid grid-cols-1;
  }
</style>
