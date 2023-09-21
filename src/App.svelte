<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Dashboard from "./pages/Dashboard.svelte";
  import Home from "./pages/Home.svelte";

  export let url = "";
</script>

<div class="w-screen h-screen">
  <Router {url}>
    <Route path="/"><Home /></Route>
    <Route path="/dashboard"><Dashboard /></Route>
  </Router>
</div>
