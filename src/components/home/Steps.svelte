<script>
  import { onMount } from "svelte";
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  import screen1 from "../../assets/png/screen1.png";
  import screen2 from "../../assets/png/screen2.png";
  import screen3 from "../../assets/png/screen3.png";
  import screen4 from "../../assets/png/screen4.png";

  let steps = [
    {
      img: screen1,
      title: "Select Colour",
      des: "select app colour from colour palette. own custom organization logo",
    },
    {
      img: screen2,
      title: "Upload Logo",
      des: "upload your own custom organization logo. own custom organization logo",
    },
    {
      img: screen3,
      title: "Select Payment Gateway",
      des: "select payment gateway depend on your business need.",
    },
    {
      img: screen4,
      title: "Get Your App📱",
      des: "See what it's like to build custom EV charging App, without writing code!",
    },
  ];

  const animateData = () => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".buildAnimateSteps",
        start: "10% 80%",
      },
    });
    tl.fromTo(
      ".buildAnimateSteps",
      0.5,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
      }
    );
  };
  onMount(() => {
    animateData();
  });
</script>

<div
  class="flex flex-col gap-14 w-full h-max px-[10vw] pt-[15vh] buildAnimateSteps opacity-0"
>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-3">
      <p class="text-center text-4xl text-white font-semibold">
        Steps to Create Your EV Charging App
      </p>
      <p class="text-lg text-center text-gray-400">
        See what it's like to build custom EV charging App, without writing
        code!
      </p>
    </div>
  </div>

  <div class="w-full grid grid-cols-4 gap-8">
    {#each steps as step}
      <div
        class="flex flex-col bg-[#1A1F24] h-[70vh] rounded-lg border border-gray-800"
      >
        <div class="flex items-center w-full h-full">
          <img src={step.img} alt="" class="h-[330px] mx-auto" />
        </div>
        <div class="flex flex-col items-start w-full h-[20%] bg-[#1C2428] p-4">
          <p class="text-white text-lg font-semibold">{step.title}</p>
          <p class="text-xs text-gray-400">
            {step.des}
          </p>
        </div>
      </div>
    {/each}
  </div>
</div>
