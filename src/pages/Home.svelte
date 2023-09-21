<script lang="ts">
  import Footer from "../components/common/Footer.svelte";
  import Navbar from "../components/common/Navbar.svelte";
  import Clients from "../components/home/Clients.svelte";
  import Customers from "../components/home/Customers.svelte";
  import MainContent from "../components/home/MainContent.svelte";
  import Steps from "../components/home/Steps.svelte";
</script>

<div
  class="flex flex-col bg-gradient-to-t to-[#1C2328] from-[#14181B] min-h-screen"
>
  <Navbar />
  <MainContent />
  <Clients />
  <Steps />
  <Customers />
  <Footer />
</div>
