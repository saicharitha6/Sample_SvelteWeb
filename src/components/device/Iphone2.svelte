<script>
  import kazamIcon from "../../assets/svg/kazam-icon.svg";
  import bgImage from "../../assets/svg/mapScreen.svg";
  import { appDetails } from "../../stores/store";
  import {
    mdiMapMarker,
    mdiQrcode,
    mdiWalletOutline,
    mdiAccountCircleOutline,
    mdiEvPlugType2,
    mdiEvPlugType1,
    mdiEvPlugChademo,
    mdiNavigationVariant,
  } from "@mdi/js";
  import Icon from "mdi-svelte";
  import hubImage from "../../assets/png/hubImage.png";

  let bottomBar = [
    { label: "Map", icon: mdiMapMarker },
    { label: "Scan to Charge", icon: mdiQrcode },
    { label: "Wallet", icon: mdiWalletOutline },
    { label: "Profile", icon: mdiAccountCircleOutline },
  ];
</script>

<div class="flex flex-col gap-4 w-full h-full">
  <div class="temp-wrapper">
    <div class="px">
      <div class="px__body">
        <div class="px__body__cut" />
        <div class="px__body__speaker" />
        <div class="px__body__sensor" />

        <div class="px__body__mute" />
        <div class="px__body__up" />
        <div class="px__body__down" />
        <div class="px__body__right" />
      </div>

      <div class="px__screen select-none">
        <div class="px__screen__">
          <div class="px__screen__frame">
            <div
              class="relative flex w-full h-full"
              style="background-image: url({bgImage});
              no-repeat center center fixed; 
              -webkit-background-size: contain;
              -moz-background-size: contain;
              -o-background-size: conatin ;
              background-size: contain;
              background-repeat: no-repeat;"
            >
              <div class="flex flex-col relative w-full h-full">
                <div
                  class="flex gap-1 w-max h-max bg-white border mt-20 ml-3 drop-shadow-lg rounded p-0.5"
                >
                  <p
                    class="text-[9px] rounded px-1 py-0.5"
                    style="background-color: {$appDetails.secondaryColor};"
                  >
                    Map View
                  </p>
                  <p class="text-[9px] text-gray-500 px-1 py-0.5">List View</p>
                </div>

                <div
                  class="w-full h-56 p-5"
                  style="color: {$appDetails.primaryColor}"
                >
                  <div class="ml-10">
                    <Icon path={mdiMapMarker} size={1.2} />
                  </div>
                  <div class="ml-32">
                    <Icon path={mdiMapMarker} size={1.2} />
                  </div>
                  <div class="ml-24">
                    <Icon path={mdiMapMarker} size={1.2} />
                  </div>
                  <div class="ml-6">
                    <Icon path={mdiMapMarker} size={1.2} />
                  </div>
                  <div class="ml-20">
                    <Icon path={mdiMapMarker} size={1.2} />
                  </div>
                </div>

                <div
                  class="absolute flex gap-3 items-center w-[90%] bg-white drop-shadow-xl border h-max bottom-20 ml-3 p-1.5 rounded-md"
                >
                  <img src={hubImage} alt="" class="h-16 w-16" />
                  <div class="relative flex flex-col gap-0.5 w-full h-full">
                    <p class="text-[10px]">Tata Charging Station..</p>
                    <div class="flex items-start">
                      <span><Icon path={mdiEvPlugType2} size={0.6} /></span>
                      <span><Icon path={mdiEvPlugType1} size={0.6} /></span>
                      <span><Icon path={mdiEvPlugChademo} size={0.6} /></span>
                      <p class="text-[10px] text-green-600 ml-2">Available</p>
                    </div>
                    <p class="text-[8px]">Distance : 1km</p>
                    <p class="text-[8px]">Timing : open 24/7</p>
                    <p class="text-[8px]">Tariff : Rs0/kw, fixed Rs 10/hr</p>

                    <div
                      class="absolute flex items-center -bottom-3 -right-3 w-7 h-7 rounded-full"
                      style="background-color: {$appDetails.primaryColor}"
                    >
                      <span class="mx-auto text-white">
                        <Icon path={mdiNavigationVariant} size={0.6} />
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  class="flex items-center justify-evenly absolute w-full h-[60px] bottom-0 rounded-t-lg"
                  style="background-color: {$appDetails.primaryColor};"
                >
                  {#each bottomBar as b}
                    <div
                      class="flex flex-col items-center gap-0.5 text-gray-200 font-thin"
                    >
                      <span class="">
                        <Icon path={b.icon} size={0.8} />
                      </span>
                      <p class="text-[8px]">{b.label}</p>
                    </div>
                  {/each}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <p class="mx-auto">App Colour Preview</p>
</div>
