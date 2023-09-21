<script>
  import Iphone from "../components/device/Iphone.svelte";
  import Icon from "mdi-svelte";
  import {
    mdiSquareRoundedBadgeOutline,
    mdiTooltipImageOutline,
    mdiPaletteOutline,
    mdiCloudCheckOutline,
    mdiPhoneDial,
    mdiEmailFastOutline,
    mdiAtomVariant,
    mdiHomeVariant,
  } from "@mdi/js";
  import Step1 from "../components/dashboard/steps/Step1.svelte";
  import Step2 from "../components/dashboard/steps/Step2.svelte";
  import Step3 from "../components/dashboard/steps/Step3.svelte";
  import Step4 from "../components/dashboard/steps/step4.svelte";
  import Step5 from "../components/dashboard/steps/Step5.svelte";
  import Step6 from "../components/dashboard/steps/step6.svelte";
  import Step7 from "../components/dashboard/steps/Step7.svelte";
  import KazamIconSvg from "../assets/svg/kazam-icon.svg";
  import { activeSteps, appDetails } from "../stores/store";
  import { handleSteps } from "../services/handleSteps";
  import Iphone2 from "../components/device/Iphone2.svelte";
  import Iphone3 from "../components/device/Iphone3.svelte";
  import ResultModal from "../components/dashboard/ResultModal.svelte";
  import axios from "axios";

  let steps = [
    { label: "step1", icon: mdiSquareRoundedBadgeOutline },
    { label: "step2", icon: mdiTooltipImageOutline },
    { label: "step3", icon: mdiPaletteOutline },
    { label: "step4", icon: mdiCloudCheckOutline },
    { label: "step5", icon: mdiPhoneDial },
    { label: "step6", icon: mdiEmailFastOutline },
    { label: "step7", icon: mdiAtomVariant },
  ];

  let openResultModal = false;
  let appAssetsLoading = true;
  let orgCreatLoading = true;
  let appCreateLoading = true;

  const creatingApp = async () => {
    try {
      appAssetsLoading = true;
      const iconResponse = await axios({
        method: "post",
        url: `https://gitlab.com/api/v4/projects/40245387/repository/files/whitelabels%2F${$appDetails.orgNamespace}-app%2Ficon%2Epng`,
        headers: {
          "PRIVATE-TOKEN": "glpat-Uaex1XyLqY9oUiMWso58",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data: {
          branch: "main",
          author_email: "vaibhav.dagar@kazam.in",
          author_name: "Automation Tool",
          encoding: "base64",
          content: $appDetails.iconBase64.split(",")[1],
          commit_message: "create icon",
        },
      });

      await axios({
        method: "post",
        url: `https://gitlab.com/api/v4/projects/40245387/repository/files/whitelabels%2F${$appDetails.orgNamespace}-app%2Ficon_android%2Epng`,
        headers: {
          "PRIVATE-TOKEN": "glpat-Uaex1XyLqY9oUiMWso58",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data: {
          branch: "main",
          author_email: "vaibhav.dagar@kazam.in",
          author_name: "Automation Tool",
          encoding: "base64",
          content: $appDetails.iconBase64.split(",")[1],
          commit_message: "create icon",
        },
      });

      if (iconResponse.status === 201) {
        await axios({
          method: "post",
          url: `https://gitlab.com/api/v4/projects/40245387/repository/files/whitelabels%2F${$appDetails.orgNamespace}-app%2Fassets%2Flogo%2Epng`,
          headers: {
            "PRIVATE-TOKEN": "glpat-Uaex1XyLqY9oUiMWso58",
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          data: {
            branch: "main",
            author_email: "vaibhav.dagar@kazam.in",
            author_name: "Automation Tool",
            encoding: "base64",
            content: $appDetails.logoBase64.split(",")[1],
            commit_message: "create icon",
          },
        }).then(async () => {
          appAssetsLoading = false;
          orgCreatLoading = true;
          const mvToken = await axios({
            method: "post",
            url: "https://mv.kazam.in/user/login",
            headers: {},
            data: {
              email: "ajay@kazam.in",
            },
          });

          if (mvToken.status === 200) {
            const createOrgResponse = await axios({
              method: "post",
              url: "https://mv.kazam.in/user/addCMSRootUser",
              headers: {
                Authorization: "Bearer " + mvToken.data?.token,
              },
              data: {
                email: $appDetails.email.trim(),
                orgName: $appDetails.orgName,
                namespace: $appDetails.orgNamespace,
                session_time: 360,
                templateApp: true,
              },
            });

            if (createOrgResponse.status === 200) {
              orgCreatLoading = false;
              appCreateLoading = true;
              const orgTokenResponse = await axios({
                method: "post",
                url: "https://mv.kazam.in/dashboard/generateToken",
                headers: {},
                data: {
                  namespace: $appDetails.orgNamespace,
                },
              });

              if (orgTokenResponse.status === 200) {
                const creatingApp = await axios({
                  method: "post",
                  url: "http://192.168.1.33:3000/createNewApp",
                  headers: {
                    Authorization: "Bearer " + orgTokenResponse?.data,
                  },
                  data: {
                    project_id: `${$appDetails.orgNamespace}-app`,
                    primary_color: $appDetails.primaryColor,
                    secondary_color: $appDetails.secondaryColor,
                    app_name: $appDetails.appName,
                    support_email: $appDetails.email,
                    support_number: $appDetails.contact,
                    splash_screen_bg: $appDetails.splashColor,
                    drawer_background_color: $appDetails.drawerColor,
                    app_logo_aspect_ratio: $appDetails.app_logo_aspect_ratio,
                  },
                });

                if (creatingApp.status === 200) {
                  appCreateLoading = false;
                }
              }
            }
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  $: console.log($appDetails);
</script>

<ResultModal
  bind:open={openResultModal}
  bind:appAssetsLoading
  bind:orgCreatLoading
  bind:appCreateLoading
/>

<div class="flex flex-col w-screen h-screen">
  <div
    class="flex items-center text-white w-full h-[10vh] bg-[#1B2126] border-b border-gray-500"
  >
    <!-- <div class="flex items-center h-full w-[73px] border-r border-gray-500">
      <button
        class="text-gray-200 p-2.5 rounded-lg hover:bg-[#c9ced129] duration-300 cursor-pointer mx-auto"
      >
        <Icon path={mdiHomeVariant} size={1} />
      </button>
    </div> -->
    <div class="flex items-center gap-2 pl-6">
      <img src={KazamIconSvg} alt="" class="w-6 h-auto" />
      <p>Kazam App builder</p>
    </div>
  </div>

  <div class="flex w-full h-full">
    <div class="flex w-[450px] h-full white border-r shadow-lg">
      <div
        class="flex flex-col gap-4 items-center w-[20%] h-full bg-[#1B2126] border-r border-gray-500 py-4"
      >
        {#each steps as step}
          <button
            on:click={() => {
              handleSteps(step.label);
            }}
            class="text-gray-200 p-2.5 rounded-lg hover:bg-[#c9ced129] duration-300 cursor-pointer"
            class:icon-bg={$activeSteps[step.label] === true ? true : false}
          >
            <Icon path={step.icon} size={1} />
          </button>
        {/each}
      </div>
      <div class="flex w-full h-full p-4 bg-white">
        {#if $activeSteps.step1}
          <Step1 />
        {:else if $activeSteps.step2}
          <Step2 />
        {:else if $activeSteps.step3}
          <Step3 />
        {:else if $activeSteps.step4}
          <Step4 />
        {:else if $activeSteps.step5}
          <Step5 />
        {:else if $activeSteps.step6}
          <Step6 />
        {:else if $activeSteps.step7}
          <Step7 bind:openResultModal {creatingApp} />
        {/if}
      </div>
    </div>

    <div class="relative flex w-[70%] h-full">
      <div class="div-bg absolute top-0 w-full h-full" />
      <div class="flex items-center w-full h-full z-10">
        <div class="flex w-full h-full">
          <Iphone />
        </div>
        <div class="flex w-full h-full">
          <Iphone2 />
        </div>
        <div class="flex w-full h-full">
          <Iphone3 />
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .div-bg {
    background-color: #e5e5f7;
    opacity: 0.5;
    background-image: radial-gradient(#444cf7 0.5px, transparent 0.5px),
      radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px);
    background-size: 20px 20px;
    background-position: 0 0, 10px 10px;
  }

  .icon-bg {
    @apply bg-[#c9ced129];
  }
</style>
