<script>
  import AppBuilderDashboardImg from "../../assets/svg/appbuilderDashboard.svg";
  import gsap from "gsap";
  import { onMount } from "svelte";

  gsap.to("animateImage", {
    x: 100,
    force3D: true, // always uses 3d
  });

  const animateData = () => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".animation_text",
      0.7,
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        delay: 0.5,
        opacity: 1,
      }
    );
  };

  onMount(() => {
    animateData();
  });
</script>

<div
  class="flex flex-col gap-8 h-max px-[10vw] w-full animation_text opacity-0"
>
  <p
    class="text-white text-center text-7xl mx-auto font-semibold mt-48 text-transparent bg-clip-text bg-gradient-to-r from-green-400 pb-4 to-sky-500 leading-[85px] "
  >
    Your EV Charging App delivered <br /> at lightning speed
  </p>
  <p class="text-xl text-center text-gray-400 font-semibold">
    Create your own app, for your EV charging business without writing any code. <br
    /> Your app is just a few clicks away 🚀
  </p>

  <div class="animateImage">
    <img src={AppBuilderDashboardImg} alt="" class="mt-16" />
  </div>
</div>
