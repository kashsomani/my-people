<script>
  import Login from "./components/Login.svelte";
  import Layout from "./components/Layout.svelte";
  import { logged_in_store } from "./logged_in";
  let logged_in = false;
  logged_in_store.subscribe((value) => {
    logged_in = value;
  });
</script>

<main class="text-primary">
  <div class="background" />
  {#if logged_in}
    <Layout />
  {:else}
    <Login />
  {/if}
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  .dark-background {
    background-color: #00cdcd;
  }
  .light-background {
    background-color: #00b3b3;
  }
  .text-dark {
    color: #008080;
  }
  .button-background {
    background-color: #003434;
  }
  .background {
    z-index: -1;
    background-color: #06acac;
    @apply fixed inset-0;
  }
  main {
    @apply font-semibold grid grid-cols-1 place-items-center pb-2;
    font-weight: 600;
    display: grid;
    padding-bottom: 2;
  }
  .red-border {
    @apply p-2 border-2 border-black rounded-lg;
  }
  .text-primary {
    color: #00ffff;
  }
  .input-container {
    border-radius: 70px;
    background: #06acac;
    box-shadow: inset 18px 18px 42px #047f7f, inset -18px -18px 42px #08d9d9;
    @apply p-4;
  }
  .embossed {
    border-radius: 70px;
    background: #06acac;
    box-shadow: 18px 18px 42px #047f7f, -18px -18px 42px #08d9d9;
  }
  input {
    outline: none;
    @apply bg-transparent text-center;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s;
    -webkit-text-fill-color: #00ffff !important;
  }
  .depressed-button {
    border-radius: 70px;
    background: #06acac;
    box-shadow: inset 18px 18px 42px #047f7f, inset -18px -18px 42px #08d9d9;
    @apply m-4 p-4 font-extrabold;
  }
  .embossed-button {
    border-radius: 70px;
    background: #06acac;
    box-shadow: 18px 18px 42px #047f7f, -18px -18px 42px #08d9d9;
    @apply m-4 p-4 font-extrabold;
  }
</style>
