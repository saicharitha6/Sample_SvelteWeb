<script>
  import { handleSteps } from "../../../services/handleSteps";
  import { fade, fly } from "svelte/transition";
  import { appDetails } from "../../../stores/store";
</script>

<div
  class="flex flex-col gap-4 w-full h-full bg-white"
  in:fly={{ x: 50, duration: 400 }}
>
  <div class="flex flex-col gap-1">
    <p>Enter Your App Name</p>
    <input
      type="text"
      class="input"
      placeholder="Kazam EV"
      required
      bind:value={$appDetails.appName}
    />
  </div>

  <div class="flex flex-col gap-1">
    <p>Enter Your Organization Name</p>
    <input
      type="text"
      class="input"
      placeholder="Kazam EV Pvt Ltd"
      required
      bind:value={$appDetails.orgName}
    />
  </div>
  <div class="flex flex-col gap-1">
    <p>Enter Your Organization Namespace</p>
    <input
      type="text"
      class="input"
      placeholder="kazam"
      required
      bind:value={$appDetails.orgNamespace}
    />
  </div>
  <div class="flex gap-3 w-full mt-auto">
    <button
      class="button ml-auto"
      on:click={() => {
        if (
          !$appDetails.appName ||
          !$appDetails.orgName ||
          !$appDetails.orgNamespace
        ) {
          alert("Please Enter All Details!");
          return;
        }
        handleSteps("step2");
      }}>Next</button
    >
  </div>
</div>
