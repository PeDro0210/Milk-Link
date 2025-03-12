<script lang="ts">
  import LinkButtons from "./components/link_buttons.svelte";
  import { icon_placeholder_url } from "../taskbar/utils/constant";
  import type { TaskbarButton } from "../taskbar/utils/interfaces";
  import { slide } from "svelte/transition";
  import { global_state } from "../../handlers/global_handlers/global_handler.svelte";

  let options = { duration: 50, x: "75vh" };

  //! Just for debugging
  let dummy_link_buttons: TaskbarButton[] = [];

  for (let i = 0; i <= 10; i++) {
    let window_buttons: TaskbarButton = {
      icon: icon_placeholder_url,
      text: null,
      width: null,
      key: i,
    };
    dummy_link_buttons.push(window_buttons);
  }
</script>

{#if !global_state.slide_start_menu}
  <div id="start-menu" transition:slide={options}>
    <div id="title-bar">
      <text>Pedro's Link</text>
    </div>
    <div id="content-side">
      {#each dummy_link_buttons as button}
        <LinkButtons
          icon_url={button.icon}
          text={button.text}
          key={button.key}
        />
      {/each}
    </div>
  </div>
{/if}

<style lang="scss">
  #start-menu {
    /* StartMenu */

    box-sizing: border-box;

    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px 10px 10px 10px;
    gap: 10px;

    width: 271px;
    height: 75vh; //For adapting to the screen, not the parent-element

    pointer-events: auto;

    background: #0e0f14;
    border-right: 2px solid #3a3a3a;
    box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
  }

  #title-bar {
    /* title-bar */

    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    //Inverse padding for some reason
    padding: 10px 0px 0px 0px;
    gap: 10px;

    width: 34px;
    height: 100%;

    background: linear-gradient(180deg, #542738 0%, #a33638 100%);

    writing-mode: vertical-lr;
    text-orientation: sideways-right;
    //There wasn't a fucking way of doing nativley
    transform: rotate(-180deg);
    user-select: none;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;

    text {
      height: 100%;
    }
  }

  #content-side {
    /* content-side */

    /* Auto layout */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 2px;

    overflow-y: auto;
    scrollbar-width: none;
    width: 83%;
    //This ain't a good practice
    height: 101.5%;

    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
  }
</style>
