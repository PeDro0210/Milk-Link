<script lang="ts">
  import VaporwaveDesktop from "./lib/desktop/vaporwave_desktop.svelte";
  import VaporwaveStartmenu from "./lib/startmenu/vaporwave_startmenu.svelte";
  import VaporwaveTaskbar from "./lib/taskbar/vaporwave_taskbar.svelte";
</script>

<main>
  <VaporwaveDesktop />
</main>

<ui>
  <VaporwaveStartmenu />
  <VaporwaveTaskbar />
</ui>
