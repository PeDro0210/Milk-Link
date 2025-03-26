<script lang="ts">
  import VaporwaveDesktop from "./lib/elements/desktop/vaporwave_desktop.svelte";
  import VaporwaveStartmenu from "./lib/elements/startmenu/vaporwave_startmenu.svelte";
  import VaporwaveTaskbar from "./lib/elements/taskbar/vaporwave_taskbar.svelte";
  import VaporwaveTaskbarPhone from "./lib/elements/taskbar_phone/vaporwave_taskbar_phone.svelte";
  import { window_state } from "./lib/handlers/global_handlers/global_handler.svelte";

  $effect(() => {
    window_state.changeInnerWidth();
  });
</script>

<crt-filter>
  <main>
    <VaporwaveDesktop />
  </main>

  <hud>
    {#if window_state.window_width > 700}
      <VaporwaveStartmenu />
      <VaporwaveTaskbar />
    {:else}
      <VaporwaveTaskbarPhone />
    {/if}
  </hud>
</crt-filter>
