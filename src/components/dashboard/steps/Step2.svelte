<script lang="ts">
  import { handleSteps } from "../../../services/handleSteps";
  import { fade, fly } from "svelte/transition";
  import Compressor from "compressorjs";
  import { mdiClose } from "@mdi/js";
  import Icon from "mdi-svelte";
  import { appDetails } from "../../../stores/store";

  let dragOver = false;
  let logoImage = {
    logoData: null,
    logo: "",
  };

  let iconImage = {
    iconData: null,
    icon: "",
  };

  function imgSize() {
    let myImg = document.querySelector("#app_icon");
    // @ts-ignore
    let realWidth = myImg.naturalWidth;
    // @ts-ignore
    let realHeight = myImg.naturalHeight;

    $appDetails.app_logo_aspect_ratio = Number(
      (realHeight / realWidth).toFixed(2)
    );
    // console.log({
    //   realHeight,
    //   realWidth,
    //   ratio: (realHeight / realWidth).toFixed(2),
    // });
  }

  function toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var reader = new FileReader();
      reader.onloadend = function () {
        callback(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.send();
  }

  const handleLogoUploadLocalDrag = (file, type) => {
    new Compressor(file, {
      quality: 0.6,
      success(result) {
        if (type === "logo") {
          logoImage.logoData = result;
          logoImage.logo = URL.createObjectURL(logoImage.logoData);
          $appDetails.logo = URL.createObjectURL(logoImage.logoData);
          toDataURL(
            URL.createObjectURL(logoImage.logoData),
            function (dataUrl) {
              // console.log("RESULT:", dataUrl);
              $appDetails.logoBase64 = dataUrl;
            }
          );
          // setTimeout(() => {
          //   imgSize();
          // }, 500);
        } else {
          iconImage.iconData = result;
          iconImage.icon = URL.createObjectURL(iconImage.iconData);
          $appDetails.icon = URL.createObjectURL(iconImage.iconData);
          toDataURL(
            URL.createObjectURL(iconImage.iconData),
            function (dataUrl) {
              // console.log("RESULT:", dataUrl);
              $appDetails.iconBase64 = dataUrl;
            }
          );
          setTimeout(() => {
            imgSize();
          }, 500);
        }
      },
      error(err) {
        console.log(err.message);
      },
    });
  };

  const handleLogoUploadLocal = async (e, type) => {
    const file = e.target.files[0];
    new Compressor(file, {
      quality: 0.6,
      success(result) {
        if (type === "logo") {
          logoImage.logoData = result;
          logoImage.logo = URL.createObjectURL(logoImage.logoData);
          $appDetails.logo = URL.createObjectURL(logoImage.logoData);
          toDataURL(
            URL.createObjectURL(logoImage.logoData),
            function (dataUrl) {
              // console.log("RESULT:", dataUrl);
              $appDetails.logoBase64 = dataUrl;
            }
          );
          // setTimeout(() => {
          //   imgSize();
          // }, 500);
        } else {
          iconImage.iconData = result;
          iconImage.icon = URL.createObjectURL(iconImage.iconData);
          $appDetails.icon = URL.createObjectURL(iconImage.iconData);
          toDataURL(
            URL.createObjectURL(iconImage.iconData),
            function (dataUrl) {
              // console.log("RESULT:", dataUrl);
              $appDetails.iconBase64 = dataUrl;
            }
          );
          setTimeout(() => {
            imgSize();
          }, 500);
        }
      },
      error(err) {
        console.log(err.message);
      },
    });
  };
</script>

<div
  class="flex flex-col gap-4 w-full h-full bg-white"
  in:fly={{ x: 50, duration: 400 }}
>
  <div class="flex flex-col gap-2 w-full h-full">
    <p>Company Logo</p>
    <div
      class="flex items-center border-dashed border-2 border-gray-200 rounded-xl h-full w-full"
      class:bg-gray-50={dragOver}
      on:dragover={(e) => {
        dragOver = true;
        e.preventDefault();
        e.stopPropagation();
      }}
      on:drag={(e) => {
        dragOver = true;
        e.preventDefault();
        e.stopPropagation();
      }}
      on:dragenter={(e) => {
        dragOver = true;
        e.preventDefault();
        e.stopPropagation();
      }}
      on:dragleave={(e) => {
        dragOver = false;
        e.preventDefault();
        e.stopPropagation();
      }}
      on:drop={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
          const Dragedfile = e.dataTransfer.files[0];
          handleLogoUploadLocalDrag(Dragedfile, "logo");
        } else alert("Please select  file");
        e.dataTransfer.clearData();
      }}
    >
      {#if $appDetails.logo}
        <div class="relative flex flex-col mx-2">
          <button
            class="text-gray-500 ml-auto"
            on:click={() => {
              logoImage = {
                logoData: null,
                logo: "",
              };
              $appDetails.logo = "";
              dragOver = false;
            }}><Icon path={mdiClose} size={0.7} /></button
          >
          <div class="h-[200px] w-[300px] mx-auto">
            <img
              src={$appDetails.logo}
              alt=""
              class="w-full h-full object-contain"
            />
          </div>
        </div>
      {:else}
        <div class="flex flex-col gap-1 mx-auto">
          <div class="flex items-center mx-auto">
            <lottie-player
              src="https://assets3.lottiefiles.com/packages/lf20_urbk83vw.json"
              background="transparent"
              speed="1"
              loop
              autoplay
              class="h-24 w-auto"
            />
          </div>

          <p class="text-sm mx-auto">
            Drag your Company Logo here, or
            <label
              class="text-blue-500 hover:underline duration-200 cursor-pointer"
            >
              <input
                type="file"
                hidden
                id="imageInput"
                on:change={(e) => {
                  handleLogoUploadLocal(e, "logo");
                }}
                on:load={(e) => console.log({ e })}
              />
              browse
            </label>
          </p>
          <p class="text-xs text-center text-gray-400 mx-auto">
            PNG and JPG files are allowed and image resolution should be 1024 x
            1024
          </p>
        </div>
      {/if}
    </div>
  </div>

  <div class="flex flex-col gap-2 w-full h-full">
    <p>App Icon</p>
    <div
      class="flex items-center border-dashed border-2 border-gray-200 rounded-xl h-full w-full"
      class:bg-gray-50={dragOver}
      on:dragover={(e) => {
        dragOver = true;
        e.preventDefault();
        e.stopPropagation();
      }}
      on:drag={(e) => {
        dragOver = true;
        e.preventDefault();
        e.stopPropagation();
      }}
      on:dragenter={(e) => {
        dragOver = true;
        e.preventDefault();
        e.stopPropagation();
      }}
      on:dragleave={(e) => {
        dragOver = false;
        e.preventDefault();
        e.stopPropagation();
      }}
      on:drop={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
          const Dragedfile = e.dataTransfer.files[0];
          handleLogoUploadLocalDrag(Dragedfile, "icon");
        } else alert("Please select  file");
        e.dataTransfer.clearData();
      }}
    >
      {#if $appDetails.icon}
        <div class="relative flex flex-col mx-2">
          <button
            class="text-gray-500 ml-auto"
            on:click={() => {
              iconImage = {
                iconData: null,
                icon: "",
              };
              $appDetails.icon = "";
              dragOver = false;
            }}><Icon path={mdiClose} size={0.7} /></button
          >
          <div class="h-[200px] w-[300px] mx-auto">
            <img
              src={$appDetails.icon}
              alt=""
              id="app_icon"
              class="w-full h-full object-contain"
            />
          </div>
        </div>
      {:else}
        <div class="flex flex-col gap-1 mx-auto">
          <div class="flex items-center mx-auto">
            <lottie-player
              src="https://assets3.lottiefiles.com/packages/lf20_urbk83vw.json"
              background="transparent"
              speed="1"
              loop
              autoplay
              class="h-24 w-auto"
            />
          </div>

          <p class="text-sm mx-auto">
            Drag your Company Icon here, or
            <label
              class="text-blue-500 hover:underline duration-200 cursor-pointer"
            >
              <input
                type="file"
                hidden
                id="imageInput"
                on:change={(e) => handleLogoUploadLocal(e, "icon")}
              />
              browse
            </label>
          </p>
          <p class="text-xs text-center text-gray-400 mx-auto">
            PNG and JPG files are allowed and image resolution should be 1024 x
            1024
          </p>
        </div>
      {/if}
    </div>
  </div>
  <div class="flex gap-3 w-full mt-auto">
    <button class="button-gray ml-auto" on:click={() => handleSteps("step1")}
      >Previous</button
    >
    <button
      class="button"
      on:click={() => {
        if (!$appDetails.logo || !$appDetails.icon) {
          alert("Please select icon and logo!");
          return;
        }
        handleSteps("step3");
      }}>Next</button
    >
  </div>
</div>
