<script>
  export let person;
</script>
<div>
  {#each Object.entries(person) as attr}
    <div class="grid grid-cols-4 gap-0">
      <div class="col-span-1 p-4"><p>{`${attr[0]}: `}</p></div>
      <div class="col-span-3 p-4 text-center"><p>{`${attr[1]}`}</p></div>
    </div>
  {/each}
</div>

<style>
  div{
    
    white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  }
</style>
