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
    if (Object.keys(temp_person).length !== 0) {
      await addPerson(temp_person)
      person = {}
      key_values.set([{
        key: "",
        id: Date.now(),
        value: "",
        added: false
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
          added: false
        });
        kv.map(e => {
          if (e.id === id) {
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

  function enterValue(event, key, id, value) {
    if (event.key === "Enter") {
      addKey(key, id, value)
    }
  }
  async function enterKey(event, key, id, value) {
    if (event.key === "Enter") {
      await addP(person)
    }
  }

  function init(el) {
    el.focus()
  }
</script>

<div class="container form" transition:fade="{{duration:1000}}">
  {#each keys as {key,id,value,added} (id)}
    <div class="grid grid-cols-1 md:grid-cols-12 place-items-center gap-0 m-2 p-4">
      <div class="md:col-span-4  input-container">
        {#if !added}
        <input type="text" name="{key}" bind:value={key} use:init on:keydown={(event)=>{enterKey(event,key,id,value)}}>
        {:else}
        <input type="text" name="{key}" bind:value={key} on:keydown={(event)=>{enterKey(event,key,id,value)}}>
        {/if}
      </div>
      <div class="md:col-span-7  input-container ">
        <input type="text" name="{value}" bind:value={value} on:keydown={(event)=>{enterValue(event,key,id,value)}}>
      </div>
      {#if !added}
        <div class="md:col-span-1 m-auto ">
          <button on:click={()=>{addKey(key,id,value);}} class=" plus-button button-background">
            +
          </button>
        </div>
      {/if}
      {#if added}
        <div class="col-span-1 m-auto">
          <button on:click={()=>{deleteKey(key,id);}} class="x-button button-background">
            x
          </button>
        </div>
      {/if}
    </div>
  {/each}
  <div transition:fade="{{duration:2000}}" class="grid grid-cols-1 place-items-center">
    <button on:click={async ()=>{await addP(person);}} class="add-button button-background">
      ADD
    </button>
  </div>
</div>
<style >
  .input-container{
    border-radius: 70px;
background: #06acac;
box-shadow: inset 18px 18px 42px #047f7f,
            inset -18px -18px 42px #08d9d9;
            @apply p-4 grid grid-cols-1 place-items-center m-2;
  }
  input{
    outline:none;
    @apply bg-transparent text-center;
  }
  .form{
    @apply rounded grid grid-cols-1 rounded-lg shadow-2xl m-6 mb-4 ;
  }
  .add-button{
    border-radius: 70px;
background: #06acac;
box-shadow: inset 18px 18px 42px #047f7f,
            inset -18px -18px 42px #08d9d9;
    @apply m-4 p-4 font-extrabold;
  }
  .plus-button{
    border-radius: 70px;
background: #06acac;
box-shadow: inset 18px 18px 42px #047f7f,
            inset -18px -18px 42px #08d9d9;
    @apply  p-4 font-extrabold;
  }
  .x-button{
    border-radius: 70px;
background: #06acac;
box-shadow: inset 18px 18px 42px #047f7f,
            inset -18px -18px 42px #08d9d9;
    @apply  p-4 font-extrabold;
  }
  .container{
    border-radius: 70px;
background: #06acac;
box-shadow:  18px 18px 42px #047f7f,
             -18px -18px 42px #08d9d9;
  }
</style>
