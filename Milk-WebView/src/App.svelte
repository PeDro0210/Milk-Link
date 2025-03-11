<script lang="ts">
  import VaporwaveDesktop from "./lib/elements/desktop/vaporwave_desktop.svelte";
  import VaporwaveStartmenu from "./lib/elements/startmenu/vaporwave_startmenu.svelte";
  import VaporwaveTaskbar from "./lib/elements/taskbar/vaporwave_taskbar.svelte";
</script>

<crt-filter>
  <main>
    <VaporwaveDesktop />
  </main>

  <hud>
    <VaporwaveStartmenu />
    <VaporwaveTaskbar />
  </hud>
</crt-filter>
