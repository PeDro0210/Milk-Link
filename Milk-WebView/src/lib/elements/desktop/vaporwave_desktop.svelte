<script lang="ts">
  import type { LinkRelatedState } from "../../handlers/states/link_related_state.svelte";
  import VaporwaveWindow from "./components/vaporwave_window.svelte";
  import desktopHandler from "../../handlers/elements_handlers/desktop/desktop_handler.svelte";
  import { onMount } from "svelte";

  let handler = desktopHandler();

  let state: LinkRelatedState = $state(handler.getState());

  onMount(async () => {
    handler.getLinks();
    handler.setLoaded;
  });
</script>

<div class="desktop">
  {#each state.links_list as link_object}
    <VaporwaveWindow
      text={link_object.title}
      img_content={link_object.windowPhotoUrl}
      on_click_function={() => {
        window.open(link_object.link, "_blank");
      }}
      key={link_object.key as number}
    />
  {/each}
</div>
