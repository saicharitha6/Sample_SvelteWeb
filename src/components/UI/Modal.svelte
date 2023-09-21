<script>
  import { fly } from "svelte/transition";

  export let open;
</script>

{#if open}
  <div
    class="w-screen h-screen z-50 bg-blueGray-900/60 dark:bg-darkcolor1/60 backdrop-blur-[4px] fixed top-0 left-0 flex lg:w-full lg:top-0 lg:left-0 shadow-lg md:p-4 md:px-2 lg:px-5"
  >
    <div class="h-auto w-min m-auto flex">
      <div
        class="flex h-max w-max mx-auto lg:mx-auto sm:w-auto"
        in:fly={{ duration: 200 }}
      >
        <slot />
      </div>
    </div>
  </div>
{/if}
