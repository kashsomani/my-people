<script>
  import {fade} from 'svelte/transition'
  const inputs = [
    "Name",
    "Age",
    "Job",
    "Phone"
  ]
</script>

<div class="red-border" transition:fade="{{duration:1000}}">
  <div class="grid grid-cols-1">
    {#each inputs as field}
    <div >
      <p class="p-2 text-center">{field}</p>
      <input type="text" name="{field}" value="">
    </div>
    {/each}
  </div>
</div>
<style >
  input{
    @apply bg-yellow-900 text-yellow-300 p-2 border-2 rounded-lg border-transparent;
  }
  input:focus{
    outline:none;
    @apply border-yellow-500;
  }
</style>
