<script>
  import kazamIcon from "../../assets/svg/kazam-icon.svg";
  import bgImage from "../../assets/svg/mainScreen.svg";
  import { appDetails } from "../../stores/store";
  import {
    mdiAccountOutline,
    mdiBookmarkOutline,
    mdiCardsHeartOutline,
    mdiClockTimeFiveOutline,
    mdiLogout,
    mdiMoleculeCo2,
    mdiPhoneOutline,
    mdiTruckOutline,
    mdiWhatsapp,
  } from "@mdi/js";
  import Icon from "mdi-svelte";

  let sideBar = [
    { label: "I am Host", icon: mdiAccountOutline },
    { label: "Charging History", icon: mdiClockTimeFiveOutline },
    { label: "Favourites", icon: mdiCardsHeartOutline },
    { label: "My Bookings", icon: mdiBookmarkOutline },
    { label: "My Vehicles", icon: mdiTruckOutline },
    { label: "Support", icon: mdiWhatsapp },
    { label: "customer Care", icon: mdiPhoneOutline },
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
                -o-background-size: contain;
                background-size: contain;
                background-repeat: no-repeat"
            >
              <div
                class="w-[70%] h-full bg-red-500 pt-8 px-3"
                style="background-color:{$appDetails.drawerColor
                  ? $appDetails.drawerColor
                  : $appDetails.primaryColor}"
              >
                <div class="relative flex flex-col gap-2 h-full">
                  <div class="flex flex-col gap-2 font-thin text-white">
                    <div class="flex gap-2">
                      <div
                        class="text-black rounded-full py-0.5 px-1 text-xs"
                        style="color: {$appDetails.drawerColor}; background-color: white"
                      >
                        RS
                      </div>
                      <p class="text-sm">Rahul Singh</p>
                    </div>
                    <div class="flex justify-between items-center w-full">
                      <div class="flex flex-col">
                        <p class="text-[10px]">Rs 500.00</p>
                        <p class="text-[8px]">Current Balance</p>
                      </div>
                      <div class="flex flex-col">
                        <span class="mx-auto">
                          <Icon path={mdiMoleculeCo2} size={0.7} />
                        </span>
                        <p class="text-[8px]">132.44 kWh</p>
                      </div>
                    </div>
                  </div>
                  <div class="w-full border-b opacity-20" />

                  <div class="flex flex-col gap-2">
                    {#each sideBar as s}
                      <div
                        class="flex items-center gap-2 p-2 rounded"
                        style="background-color: {$appDetails.secondaryColor};"
                      >
                        <span>
                          <Icon path={s.icon} size={0.6} />
                        </span>
                        <p class="text-[10px] font-thin">{s.label}</p>
                      </div>
                    {/each}
                  </div>

                  <div
                    class="flex flex-col gap-8 w-full absolute bottom-3 font-thin text-white"
                  >
                    <div class="flex items-center w-full justify-between">
                      <p class="flex gap-1 items-center text-[10px]">
                        <span><Icon path={mdiLogout} size={0.6} /></span>
                        Logout
                      </p>
                      <p class="text-[10px]">1.2.1 v</p>
                    </div>
                    <p class="text-[8px] mx-auto">Powerded by Kazam</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <p class="mx-auto">App Drawer Preview</p>
</div>
