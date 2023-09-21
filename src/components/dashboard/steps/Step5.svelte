<script>
  import { handleSteps } from "../../../services/handleSteps";
  import { fade, fly } from "svelte/transition";
  import { countryCode } from "../../../utils/countryCode";
  import { appDetails } from "../../../stores/store";

  let selectedCountryCode = `+91`;
  let phone = "";
  let selectedCountryCodeFlag = countryCode.filter((d) => {
    if (d.dial_code === selectedCountryCode) {
      return d;
    }
  });

  $: {
    selectedCountryCodeFlag = countryCode.filter((d) => {
      if (d.dial_code === selectedCountryCode) {
        return d;
      }
    });
  }
</script>

<div
  class="flex flex-col gap-4 w-full h-full"
  in:fly={{ x: 50, duration: 400 }}
>
  <p>Customer Support No</p>

  <select
    class="input"
    name="countryCode"
    value={selectedCountryCode}
    on:change={(e) => {
      //@ts-ignore
      selectedCountryCode = e.target.value;
    }}
  >
    {#each countryCode as country}
      <option value={country.dial_code}
        >{`${country.name} (${country.dial_code})`}</option
      >
    {/each}
  </select>
  <div class="flex gap-2 w-full">
    <p
      class="flex items-center gap-1 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 duration-300 w-max p-2.5"
    >
      <span>{selectedCountryCodeFlag[0].flag}</span>
      {selectedCountryCode}
    </p>

    <input
      type="number"
      name=""
      id=""
      bind:value={phone}
      class="input"
      placeholder="support no"
      on:input={(e) => {
        // @ts-ignore
        $appDetails.contact = selectedCountryCode + e.target.value;
      }}
    />
  </div>
  <!-- <input
    type="number"
    id="number"
    class="input"
    placeholder="support no"
    required
  /> -->
  <div class="flex gap-3 w-full mt-auto">
    <button class="button-gray ml-auto" on:click={() => handleSteps("step4")}
      >Previous</button
    >
    <button class="button" on:click={() => handleSteps("step6")}>Next</button>
  </div>
</div>
