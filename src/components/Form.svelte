<script>
  import {
    fade
  } from 'svelte/transition'
  import {
    addPerson
  } from '../firebase'
  import {
    key_values
  } from '../stores/key_values'

  let keys = []
  key_values.subscribe(value => {
    keys = value
  });

  let count = 0
  async function addP(temp_person) {
    if (Object.keys(temp_person).length !== 0 ) {
      await addPerson(temp_person)
      person = {}
      key_values.set([{
        key: "",
        id: Date.now(),
        value: "",
        added:false
      }])
    } else {
      alert("addition cannot be empty")
    }
  }
  $: person = {}
  $: clean = (() => {
    for (let i in person) {
      if (!person[i]) {
        delete person[i]
      }
    }
  })()

  function addKey(key, id, value) {
    if (!key || !value) {
      alert("invalid key / value")
    } else {
      person[key] = value
      key_values.update(kv => {
        kv.push({
          key: "",
          id: Date.now(),
          value: "",
          added:false
        });
        kv.map(e=>{
          if(e.id===id){
            e.added = true
          }
        })
        return kv
      })

    }
  }

  function deleteKey(key, id) {
    key_values.update(kv => {
      return kv.filter(v => v.id !== id);
    });
    delete person[key];
  }
  function enterValue(event,key,id,value){
    if(event.key==="Enter"){
      addKey(key,id,value)
    }
  }
  async function enterKey(event,key,id,value){
    if(event.key==="Enter"){
      await addP(person)
    }
  }
  function init(el){
    el.focus()
  }
</script>

<div class="red-border form" transition:fade="{{duration:1000}}">
  {#each keys as {key,id,value,added} (id)}
    <div class="grid grid-cols-12 place-items-center gap-1 m-auto p-4">
      <div class="col-span-2 p-4 bg-blue-300 rounded rounded-full grid grid-cols-1 place-items-center">
        {#if !added}
        <input type="text" name="{key}" bind:value={key} use:init on:keydown={(event)=>{enterKey(event,key,id,value)}}>
        {:else}
        <input type="text" name="{key}" bind:value={key} on:keydown={(event)=>{enterKey(event,key,id,value)}}>
        {/if}
      </div>
      <div class="col-span-9 p-4 bg-blue-300 rounded rounded-full grid grid-cols-1 place-items-center">
        <input type="text" name="{value}" bind:value={value} on:keydown={(event)=>{enterValue(event,key,id,value)}}>
      </div>
      {#if !added}
        <div class="col-span-1 m-auto ">
          <button on:click={()=>{addKey(key,id,value);}} class=" plus-button">
            +
          </button>
        </div>
      {/if}
      {#if added}
        <div class="col-span-1 m-auto">
          <button on:click={()=>{deleteKey(key,id);}} class="x-button">
            x
          </button>
        </div>
      {/if}
    </div>
  {/each}
  <div transition:fade="{{duration:2000}}" class="grid grid-cols-1 place-items-center">
    <button on:click={async ()=>{await addP(person);}} class="add-button">
      ADD
    </button>
  </div>
</div>
<style >
  input{
    outline:none;
    @apply bg-transparent text-center;
  }
  .form{
    @apply rounded grid grid-cols-1 rounded-lg shadow-2xl m-6 mb-4 ;
  }
  .add-button{
    @apply mt-4 p-4 bg-gray-700 rounded-full rounded-lg shadow-2xl text-blue-300;
  }
  .plus-button{
    @apply bg-gray-700 rounded-full rounded-lg shadow-2xl text-blue-300 p-4;
  }
  .x-button{
    @apply bg-red-600 rounded-full rounded-lg shadow-2xl text-blue-300 p-4
  }
</style>
