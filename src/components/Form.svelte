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

  async function addP(temp_person) {
     if(Object.keys(temp_person).length !== 0){
      console.log(`${Object.entries(temp_person).length}`)
      await addPerson(temp_person)
      person = {}
    }
    else {
      alert("addition cannot be empty")
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

<div class="red-border form" transition:fade="{{duration:1000}}">
  <div class="grid grid-cols-1">
    {#each inputs as field}
    <div >
      <p class="p-2 text-center">{`${field.charAt(0).toUpperCase() + field.slice(1)}`}</p>
      <input type="text" name="{field}" bind:value={person[field]}>
    </div>
    {/each}
  </div>
  <div transition:fade="{{duration:2000}}" class="grid grid-cols-1 place-items-center">
    <button on:click={async ()=>{await addP(person);}}>
      ADD
    </button>
  </div>
</div>
<style >
  input{
    @apply bg-blue-200 text-black p-2 border-2 border-transparent;
  }
  input:focus{
    outline:none;
    @apply border-blue-900;
  }
  .form{
    @apply rounded rounded-lg shadow-2xl ;
  }
</style>
