<script lang="ts">
  import type { LinkRelated } from "../../handlers/states/link_related_state.svelte";
  import VaporwaveStartmenu from "../startmenu/vaporwave_startmenu.svelte";
  import VaporwaveWindow from "./components/vaporwave_window.svelte";
  import desktopHandler from "../../handlers/elements_handlers/desktop/desktop_handler";

  let state: LinkRelated = $state({
    links_list: [],
  });

  let handler = desktopHandler(state);

  $effect(() => {
    handler.fetch_links();
  });
</script>

<div class="desktop">
  {#each state.links_list as link}
    <VaporwaveWindow
      text={link.title}
      img_content={link.window_photo}
      key={link.key}
    />
  {/each}
</div>
