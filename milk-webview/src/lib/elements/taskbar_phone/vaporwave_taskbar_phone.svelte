<script lang="ts">
  import { onMount } from "svelte";
  import { reactivity_startmenu_state } from "../../handlers/global_handlers/global_handler.svelte";
  import { start_button_attributes } from "../taskbar/utils/constant";
  import taskbarHandler from "../../handlers/elements_handlers/taskbar/taskbar_handler.svelte";

  let handler = taskbarHandler();

  onMount(() => {
    handler.setLoaded;
  });
</script>

<div id="taskbar">
  <button id="taskbar-home" onclick={reactivity_startmenu_state.toggle}>
    <img
      class="icon"
      src={start_button_attributes.icon}
      alt="icon of the link button"
    />
  </button>
</div>

<style lang="scss">
  #taskbar {
    justify-content: center;

    height: 10vh;
  }
  #taskbar-home {
    box-sizing: border-box;

    /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 10px;

    position: relative;
    width: 64px;
    height: 60px;

    background: linear-gradient(90deg, #a33638 0%, #542738 100%);
    border-width: 0px 1px 1px 0px;
    border-style: solid;
    border-color: #3a3a3a;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
  }

  .icon {
    width: 42px;
    height: 42px;
  }
</style>
