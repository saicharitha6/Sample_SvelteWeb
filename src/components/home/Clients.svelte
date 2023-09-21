<script>
  import kazamLogo from "../../assets/png/kazam-logo.png";
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  import { onMount } from "svelte";

  const animateData = () => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".buildAnimate",
        start: "10% 90%",
      },
    });
    tl.fromTo(
      ".buildAnimate",
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

<div class="flex flex-col gap-10 px-[10vw]">
  <div class="mt-[10vh] flex flex-col gap-8 buildAnimate opacity-0">
    <p class="text-[9rem] text-center text-[#252D33] font-extrabold ">
      Build Different
    </p>
    <p class="text-xl text-center text-gray-400 font-semibold">
      Trusted by users at leading companies around the world
    </p>
  </div>
  <marquee behavior="scroll" direction="left">
    <div class="flex gap-16 items-center">
      <img src={kazamLogo} width="120" height="80" alt="Natural" />
      <img src={kazamLogo} width="120" height="80" alt="Natural" />
      <img src={kazamLogo} width="120" height="80" alt="Natural" />
      <img src={kazamLogo} width="120" height="80" alt="Natural" />
      <img src={kazamLogo} width="120" height="80" alt="Natural" />
      <img src={kazamLogo} width="120" height="80" alt="Natural" />
      <img src={kazamLogo} width="120" height="80" alt="Natural" />
      <img src={kazamLogo} width="120" height="80" alt="Natural" />
      <img src={kazamLogo} width="120" height="80" alt="Natural" />
    </div>
  </marquee>
</div>
