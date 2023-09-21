<script>
  import { navigate } from "svelte-routing";
  import KazamLogo from "../../assets/svg/kazam-logo.svg";

  let showNav = false;

  const checkScroll = () => {
    const y = window.scrollY;
    if (y > 103) {
      showNav = true;
    } else {
      showNav = false;
    }
  };

  $: {
    window.addEventListener("scroll", checkScroll);
  }
</script>

<nav
  class="flex items-center w-full h-[11vh] px-[10vw] fixed top-0 left-0 duration-300 z-50"
  class:nav-bg={showNav}
  class:backdrop-blur-md={showNav}
>
  <div class="flex justify-between w-full">
    <img src={KazamLogo} alt="" class="w-auto h-12 cursor-pointer" />
    <button on:click={() => navigate("/dashboard")} class="button">
      Create Now
    </button>
  </div>
</nav>

<style global>
  .nav-bg {
    @apply bg-[#161A1D]/50;
  }
</style>
