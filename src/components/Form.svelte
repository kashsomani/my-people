<script>
  import {fade} from 'svelte/transition'
  import {
    addPerson
  } from '../firebase'
  const inputs = [
    "name",
    "age",
    "job",
    "phone"
  ];
  $:error = false
  $:success = false
  async function addP(person) {
    if(Object.keys(person).length !== 0){
      console.log(`${Object.keys(person).length}`)
      error = false
      success = true
      await addPerson(person)
    }
    else {
      error = true;
    }
  }
  $:person = {}
  $:clean= (()=>{
    for(let i in person){
      if(!person[i]){
        delete person[i]
      }
    }
  })()
</script>

<div class="red-border" transition:fade="{{duration:1000}}">
  <div class="grid grid-cols-1">
    {#each inputs as field}
    <div >
      <p class="p-2 text-center">{field}</p>
      <input type="text" name="{field}" bind:value={person[field]}>
    </div>
    {/each}
  </div>
  <div transition:fade="{{duration:2000}}" class="grid grid-cols-1 place-items-center">
    <button on:click={()=>{addPerson(person)}}>
      ADD
    </button>
  </div>
  <div class="grid grid-cols-1 place-items-center">
    {#if error}
      <p>error!!!</p>
    {/if}
    {#if success}
      <p>successsssss!!!</p>
    {/if}
  </div>
</div>
<style >
  input{
    @apply bg-blue-200 text-black p-2 border-2 rounded-lg border-transparent;
  }
  input:focus{
    outline:none;
    @apply border-blue-900;
  }
</style>
