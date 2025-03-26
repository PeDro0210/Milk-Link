<script lang="ts">
  import VaporwaveAppbar from "./lib/elements/appbar_phone/vaporwave_appbar.svelte";
  import VaporwaveDesktop from "./lib/elements/desktop/vaporwave_desktop.svelte";
  import VaporwaveStartmenu from "./lib/elements/startmenu/vaporwave_startmenu.svelte";
  import VaporwaveTaskbar from "./lib/elements/taskbar/vaporwave_taskbar.svelte";
  import VaporwaveTaskbarPhone from "./lib/elements/taskbar_phone/vaporwave_taskbar_phone.svelte";
  import {
    reactivity_startmenu_state,
    window_state,
  } from "./lib/handlers/global_handlers/global_handler.svelte";
  import AligmentTypes from "./lib/handlers/global_handlers/utils.svelte";

  console.log(import.meta.env.BACKEND_URL);
  $effect(() => {
    window_state.changeInnerWidth();

    //The only propuse for calling this variable here, is for activating the $effect
    //for running the  if statement down bewlo
    let effect_activator = reactivity_startmenu_state.slide_start_menu;

    if (window_state.window_width > 700) {
      reactivity_startmenu_state.changeSelfAlign(AligmentTypes.start.valueOf());
    } else {
      reactivity_startmenu_state.changeSelfAlign(
        AligmentTypes.center.valueOf(),
      );
    }
  });
</script>

<crt-filter>
  <main>
    <VaporwaveDesktop />
  </main>

  <hud>
    {#if window_state.window_width > 700}
      <!--- need to re "instanciate" cause the AppBar--->
      <VaporwaveStartmenu />
      <VaporwaveTaskbar />
    {:else}
      <VaporwaveAppbar />
      <VaporwaveStartmenu />
      <VaporwaveTaskbarPhone />
    {/if}
  </hud>
</crt-filter>
