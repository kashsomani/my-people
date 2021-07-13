<script>
  export let person;
</script>
<div class="container red-border grid grid-cols-1">
  {#each person as attr}
    <div class="grid grid-cols-4 gap-0">
      <div class="col-span-1 p-4"><p>{`${attr[0]}: `}</p></div>
      <div class="col-span-3 p-4 text-center"><p>{`${attr[1]}`}</p></div>
    </div>
  {/each}
</div>

<style>
  .container{
    @apply grid grid-cols-1 p-1;
  }
</style>
