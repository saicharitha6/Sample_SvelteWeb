<script>
  import { handleSteps } from "../../../services/handleSteps";
  import { fade, fly } from "svelte/transition";
  import { appDetails } from "../../../stores/store";

  let colorList = [
    {
      label: "Splash Screen Colour",
      value: "splashColor",
      des: "Splash color aefsllsfkj",
    },
    {
      label: "Primary Colour",
      value: "primaryColor",
      des: "Primary color aefsllsfkj",
    },
    {
      label: "Secondary Colour",
      value: "secondaryColor",
      des: "Secondary color aefsllsfkj",
    },
    {
      label: "Drawer Colour",
      value: "drawerColor",
      des: "Drawer color aefsllsfkj",
    },
  ];
</script>

<div
  class="flex flex-col gap-4 w-full h-full"
  in:fly={{ x: 50, duration: 400 }}
>
  <div class="flex flex-col gap-4 w-full h-full overflow-y-auto">
    {#each colorList as color}
      <div class="flex flex-col h-full w-full">
        <p>{color.label}</p>
        <div class="flex gap-2 w-full h-full">
          <div class="w-full h-full p-2">
            <input
              type="color"
              id="favcolor"
              name="favcolor"
              bind:value={$appDetails[color.value]}
              class="w-full h-full border-none rounded-md p-0.5"
            />
          </div>
          <div class="w-full h-full p-2">
            <p>
              {color.des}
            </p>
          </div>
        </div>
      </div>
    {/each}
  </div>
  <div class="flex gap-3 w-full mt-auto">
    <button class="button-gray ml-auto" on:click={() => handleSteps("step2")}
      >Previous</button
    >
    <button class="button" on:click={() => handleSteps("step4")}>Next</button>
  </div>
</div>
