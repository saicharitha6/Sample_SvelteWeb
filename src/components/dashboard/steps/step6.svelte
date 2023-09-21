<script>
  import { handleSteps } from "../../../services/handleSteps";
  import { fade, fly } from "svelte/transition";
  import { appDetails } from "../../../stores/store";
</script>

<div
  class="flex flex-col gap-4 w-full h-full"
  in:fly={{ x: 50, duration: 400 }}
>
  <p>Customer Support Email Id</p>
  <input
    type="email"
    id="email"
    class="input"
    placeholder="support email id"
    required
    bind:value={$appDetails.email}
  />
  <div class="flex gap-3 w-full mt-auto">
    <button class="button-gray ml-auto" on:click={() => handleSteps("step5")}
      >Previous</button
    >
    <button class="button" on:click={() => handleSteps("step7")}>Next</button>
  </div>
</div>
