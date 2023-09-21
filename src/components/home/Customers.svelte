<script>
  import modiImg from "../../assets/png/modi.png";
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  import { onMount } from "svelte";

  const animateData = () => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".buildAnimateCustomers",
        start: "10% 90%",
      },
    });
    tl.fromTo(
      ".buildAnimateCustomers",
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

  let customers = [
    {
      name: "Narendra Modi",
    },
    {
      name: "Narendra Modi",
    },
    {
      name: "Narendra Modi",
    },
    {
      name: "Narendra Modi",
    },
    {
      name: "Narendra Modi",
    },
    {
      name: "Narendra Modi",
    },
    {
      name: "Narendra Modi",
    },
    {
      name: "Narendra Modi",
    },
    {
      name: "Narendra Modi",
    },
    {
      name: "Narendra Modi",
    },
    {
      name: "Narendra Modi",
    },
  ];
</script>

<div
  class="flex flex-col gap-10 w-full px-[10vw] mt-[10vh] buildAnimateCustomers opacity-0"
>
  <p class="text-4xl text-white font-bold text-center">
    What our customers say
  </p>

  <marquee behavior="scroll" direction="left">
    <div class="flex gap-20">
      {#each customers as customer}
        <div class="flex flex-col items-center gap-4 min-w-[350px]">
          <img src={modiImg} width="180" alt="Natural" />
          <p class="text-3xl font-semibold text-center text-white ">
            {customer.name}
          </p>
          <p class="text-xl font-semibold text-center text-[#30BFAE] ">
            Deviloper @ India
          </p>
          <p class="text-sm text-gray-400 text-center whitespace-normal">
            "Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s"
          </p>
        </div>
      {/each}
    </div>
  </marquee>
</div>
