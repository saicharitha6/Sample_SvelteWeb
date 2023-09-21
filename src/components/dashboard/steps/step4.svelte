<script>
  import { handleSteps } from "../../../services/handleSteps";
  import { fade, fly } from "svelte/transition";
  import { appDetails } from "../../../stores/store";
</script>

<div
  class="flex flex-col gap-4 w-full h-full"
  in:fly={{ x: 50, duration: 400 }}
>
  <p>Privacy Policy URL</p>
  <input
    type="text"
    id="text"
    class="input"
    placeholder="url"
    required
    bind:value={$appDetails.policyUrl}
  />
  <div class="flex gap-3 w-full mt-auto">
    <button class="button-gray ml-auto" on:click={() => handleSteps("step3")}
      >Previous</button
    >
    <button class="button" on:click={() => handleSteps("step5")}>Next</button>
  </div>
</div>
