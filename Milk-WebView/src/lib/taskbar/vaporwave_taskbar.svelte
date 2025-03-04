<script lang="ts">
  import Separator from "./components/separator.svelte";
  import TaskbarButtons from "./components/taskbar_buttons.svelte";
  import { type TaskbarButton } from "./utils/interfaces";
  import {
    icon_placeholder_url,
    start_button_attributes,
  } from "./utils/constant";
  import TaskbarClock from "./components/taskbar_clock.svelte";

  //TODO: manage all the reactivity in here and in the state_handlers

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

  //! This is mostly debugging code
</script>

<div class="taskbar">
  <TaskbarButtons
    icon_url={icon_placeholder_url}
    width={start_button_attributes.width}
    text={start_button_attributes.text}
  />

  <Separator />

  <div class="windows-side">
    <!--TODO: Change the list to the real deal-->
    {#each dummy_window_buttons as button}
      <TaskbarButtons
        icon_url={button.icon}
        width={button.width}
        text={button.text}
      />
    {/each}
  </div>

  <Separator />

  <TaskbarClock />
</div>

<style lang="scss">
  .taskbar {
    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 10px 10px;
    gap: 13px;

    position: relative;
    width: 100%;
    height: 56px;

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
    overflow-x: auto;

    width: 75%;
    height: 56px;

    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
  }
</style>
