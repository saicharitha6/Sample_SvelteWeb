<script>
  import Modal from "../UI/Modal.svelte";
  import Icon from "mdi-svelte";
  import { mdiCheckCircle, mdiClose, mdiLoading } from "@mdi/js";
  import axios from "axios";
  import { appDetails } from "../../stores/store";

  export let open;

  export let appAssetsLoading;
  export let orgCreatLoading;
  export let appCreateLoading;
</script>

<Modal {open}>
  <div class="flex flex-col gap-4 w-[60vw] h-[70vh] bg-white p-4 rounded-md">
    <div class="w-full flex items-center justify-between">
      <p>Result</p>
      <button
        on:click={() => {
          open = false;
        }}
      >
        <Icon path={mdiClose} size={0.7} />
      </button>
    </div>

    <div class="w-full h-full flex flex-col gap-2 p-4">
      <div class="flex items-center gap-2">
        {#if appAssetsLoading}
          <div class="animate-spin text-green-600">
            <Icon path={mdiLoading} size={0.8} />
          </div>
        {:else}
          <div class="text-green-600">
            <Icon path={mdiCheckCircle} size={0.8} />
          </div>
        {/if}
        <p>Uploading App assets!!!</p>
      </div>
      <div class="border-l-2 h-10 ml-2 border-gray-300" />
      <div class="flex items-center gap-2">
        {#if orgCreatLoading}
          <div class="animate-spin text-green-600">
            <Icon path={mdiLoading} size={0.8} />
          </div>
        {:else}
          <div class="text-green-600">
            <Icon path={mdiCheckCircle} size={0.8} />
          </div>
        {/if}
        <p>Creating Organization!!!</p>
      </div>
      <div class="border-l-2 h-10 ml-2 border-gray-300" />
      <div class="flex items-center gap-2">
        {#if appCreateLoading}
          <div class="animate-spin text-green-600">
            <Icon path={mdiLoading} size={0.8} />
          </div>
        {:else}
          <div class="text-green-600">
            <Icon path={mdiCheckCircle} size={0.8} />
          </div>
        {/if}
        <p>Creating Your App 🚀</p>
      </div>
    </div>
  </div>
</Modal>
