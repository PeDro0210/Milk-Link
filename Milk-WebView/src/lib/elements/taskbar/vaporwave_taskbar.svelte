<script lang="ts">
  import Separator from "./components/separator.svelte";
  import TaskbarButtons from "./components/taskbar_buttons.svelte";
  import { type TaskbarButton } from "./utils/interfaces";
  import {
    icon_placeholder_url,
    start_button_attributes,
  } from "./utils/constant";
  import TaskbarClock from "./components/taskbar_clock.svelte";
  import { onMount } from "svelte";
  import { global_state } from "../../handlers/global_state.svelte";

  //TODO: move part of this reactivity to the handlers

  //The reactivity GRAWWWWWW
  let time: Date = $state(new Date());
  let _innerWidth: string = $state("");

  let windowResizing = (width: string) => {
    let window_side = document.querySelector(".windows-side") as HTMLElement;
    window_side.style.setProperty("--window-width", width);
  };

  onMount(() => {
    _innerWidth = window.innerWidth - 335 + "px";
    windowResizing(_innerWidth);
  });

  //Managing the date for the clock
  $effect(() => {
    setInterval(() => {
      time = new Date();
      console.log(time);
    }, 6000);
  });

  //this is still not the best option, is a pretty inscure way to listening the DOM
  //Managing the resizing of the window-sidebar
  $effect(() => {
    const updateWidth = () => {
      _innerWidth = window.innerWidth - 335 + "px"; // Adjust the width calculation as needed
      windowResizing(_innerWidth);
    };

    window.addEventListener("resize", updateWidth);
  });

  //! This is mostly debugging code

  let dummy_window_buttons: TaskbarButton[] = [];

  let window_buttons: TaskbarButton = {
    icon: icon_placeholder_url,
    text: null,
    width: null,
  };

  for (let i = 0; i <= 10; i++) {
    dummy_window_buttons.push(window_buttons);
  }
</script>

<div id="taskbar">
  <TaskbarButtons
    icon_url={icon_placeholder_url}
    width={start_button_attributes.width}
    text={start_button_attributes.text}
    on_click_function={global_state.toggle}
  />

  <Separator />

  <div class="windows-side">
    <!--TODO: Change the list to the real deal and add the correct functions-->
    {#each dummy_window_buttons as button}
      <TaskbarButtons
        icon_url={button.icon}
        width={button.width}
        text={button.text}
        on_click_function={() => {}}
      />
    {/each}
  </div>

  <Separator />

  <TaskbarClock {time} />
</div>

<style lang="scss">
  #taskbar {
    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 10px 10px;
    gap: 0px;

    position: relative;
    width: 100%;
    height: 56px;

    pointer-events: auto;

    background: #0e0f14;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .windows-side {
    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 10px;

    scrollbar-color: #542738 #0e0f14;
    scrollbar-width: thin;

    overflow-x: scroll;
    pointer-events: auto;

    width: var(--window-width, 0);

    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
  }
</style>
