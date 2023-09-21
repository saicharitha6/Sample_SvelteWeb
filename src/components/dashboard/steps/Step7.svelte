<script>
  import { handleSteps } from "../../../services/handleSteps";
  import { fade, fly } from "svelte/transition";
  import { onMount } from "svelte";
  import { appDetails } from "../../../stores/store";

  export let openResultModal;
  export let creatingApp;
</script>

<div
  class="flex flex-col gap-4 w-full h-full"
  in:fly={{ x: 50, duration: 400 }}
>
  <p>Generate Your App</p>

  <lottie-player
    src="https://assets5.lottiefiles.com/packages/lf20_rkra4gwo.json"
    background="transparent"
    speed="1"
    loop
    autoplay
    class="h-72 w-auto my-auto"
  />
  <!-- <button class="button">Generate</button> -->
  <!-- <input
    type="email"
    id="email"
    class="input"
    placeholder="Kazam EV"
    required
  /> -->

  <div class="flex gap-3 w-full mt-auto">
    <button class="button-gray ml-auto" on:click={() => handleSteps("step6")}
      >Previous</button
    >
    <button
      class="button"
      on:click={() => {
        // if (
        //   !$appDetails.appName ||
        //   !$appDetails.app_logo_aspect_ratio ||
        //   !$appDetails.contact ||
        //   !$appDetails.drawerColor ||
        //   !$appDetails.email ||
        //   !$appDetails.icon ||
        //   !$appDetails.iconBase64 ||
        //   !$appDetails.logo ||
        //   !$appDetails.logoBase64 ||
        //   !$appDetails.orgName ||
        //   !$appDetails.orgNamespace ||
        //   !$appDetails.policyUrl ||
        //   !$appDetails.primaryColor ||
        //   !$appDetails.secondaryColor ||
        //   !$appDetails.splashColor
        // ) {
        //   alert("Enter All Details!!!!!");
        //   return;
        // }
        openResultModal = true;
        setTimeout(() => {
          creatingApp();
        }, 2000);
      }}>Generate</button
    >
  </div>
</div>
