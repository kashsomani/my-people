<script>
  import { fade } from "svelte/transition";
  import { addPerson } from "../firebase";
  import { key_values } from "../stores/key_values";

  let keys = [];
  key_values.subscribe((value) => {
    keys = value;
  });

  let count = 0;
  async function addP(temp_person) {
    if (Object.keys(temp_person).length !== 0) {
      await addPerson(temp_person);
      person = {};
      key_values.set([
        {
          key: "",
          id: Date.now(),
          value: "",
          added: false,
        },
      ]);
    } else {
      alert("addition cannot be empty");
    }
  }
  $: person = {};
  $: clean = (() => {
    for (let i in person) {
      if (!person[i]) {
        delete person[i];
      }
    }
  })();

  function addKey(key, id, value) {
    if (!key || !value) {
      alert("invalid key / value");
    } else {
      person[key] = value;
      key_values.update((kv) => {
        kv.push({
          key: "",
          id: Date.now(),
          value: "",
          added: false,
        });
        kv.map((e) => {
          if (e.id === id) {
            e.added = true;
          }
        });
        return kv;
      });
    }
  }

  function deleteKey(key, id) {
    key_values.update((kv) => {
      return kv.filter((v) => v.id !== id);
    });
    delete person[key];
  }

  function enterValue(event, key, id, value) {
    if (event.key === "Enter") {
      addKey(key, id, value);
    }
  }
  async function enterKey(event, key, id, value) {
    if (event.key === "Enter") {
      await addP(person);
    }
  }

  function init(el) {
    el.focus();
  }
</script>

<div class="embossed form" transition:fade={{ duration: 1000 }}>
  {#each keys as { key, id, value, added } (id)}
    <div
      class="grid grid-cols-1 md:grid-cols-12 place-items-center gap-0 m-2 p-4"
    >
      <div class="md:col-span-4  input-container mb-3">
        {#if !added}
          <input
            type="text"
            name={key}
            bind:value={key}
            use:init
            on:keydown={(event) => {
              enterKey(event, key, id, value);
            }}
          />
        {:else}
          <input
            type="text"
            name={key}
            bind:value={key}
            on:keydown={(event) => {
              enterKey(event, key, id, value);
            }}
          />
        {/if}
      </div>
      <div class="md:col-span-7  input-container mb-3 ">
        <input
          type="text"
          name={value}
          bind:value
          on:keydown={(event) => {
            enterValue(event, key, id, value);
          }}
        />
      </div>
      {#if !added}
        <div class="md:col-span-1 m-auto ">
          <button
            on:click={() => {
              addKey(key, id, value);
            }}
            class=" depressed-button button-background"
          >
            +
          </button>
        </div>
      {/if}
      {#if added}
        <div class="col-span-1 m-auto">
          <button
            on:click={() => {
              deleteKey(key, id);
            }}
            class="depressed-button button-background"
          >
            x
          </button>
        </div>
      {/if}
    </div>
  {/each}
  <div
    transition:fade={{ duration: 2000 }}
    class="grid grid-cols-1 place-items-center"
  >
    <button
      on:click={async () => {
        await addP(person);
      }}
      class="depressed-button button-background"
    >
      ADD
    </button>
  </div>
</div>

<style lang="postcss">
  .form {
    @apply grid grid-cols-1 m-6 mb-4;
  }
</style>
