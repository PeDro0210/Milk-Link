<script lang="ts">
  import close_button from "../../../../assets/icon_buttons/close_icon.svg";
  import minimize_button from "../../../../assets/icon_buttons/minimize_icon.svg";
  import windowHandler from "../../../handlers/elements_handlers/window/window_handler.svelte";
  import type { WindowState } from "../../../handlers/states/window_state.svelte";
  import ErrorPopUp from "./compontents/error_pop_up.svelte";
  import WindowButton from "./compontents/window_button.svelte";

  let {
    text,
    img_content,
    key,
  }: { text: string; img_content: string | null; key: number } = $props();

  //Configurations for the animiation of the ErrorPopUp
  let error_pop_up_options = { duration: 100 };

  let handler = windowHandler(window, key);

  let state: WindowState = $state(handler.getState());
</script>

<svelte:window
  onmouseup={() => {
    handler.onAppbarGrabbed(false);
  }}
  onmousemove={handler.onWindowPositionChange}
/>

<div
  class="window"
  style="transform: translate({state.x_position}px,{state.y_position}px);"
  onmouseup={handler.onMoveToFront}
>
  <!-- the button is or making the compiler happy-->
  <div
    class="app-bar"
    onmousedown={() => {
      handler.onAppbarGrabbed(true);
    }}
  >
    <text>{text}</text>
    <div class="button-row">
      <WindowButton icon={minimize_button} on_click_function={() => {}} />
      <WindowButton
        icon={close_button}
        on_click_function={() => {
          handler.onShowError();
        }}
      />
    </div>
  </div>
  <img class="content" src={img_content} alt="img for the content side" />
  {#if state.show_error_pop_up}
    <ErrorPopUp animation_options={error_pop_up_options} />
  {/if}
</div>

<style lang="scss">
  /*TODO: Change everything to more responsive values*/
  /*the power of figma*/
  .window {
    /* Vaporwave-Window */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 6px 9px;
    gap: 5px;

    position: fixed;

    width: 260px;
    height: 262px;

    z-index: 0;

    background: #0e0f14;
    border-width: 0px 2px 2px 0px;
    border-style: solid;
    border-color: #3a3a3a;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

    .app-bar {
      /* little-window-bar */

      user-select: none;
      /* Auto layout */
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0px 10px;

      width: 92%;
      height: 10%;

      background: linear-gradient(90deg, #a33638 9%, #542738 100%);

      /* Inside auto layout */
      flex: none;
      order: 0;
      flex-grow: 0;

      &:active {
        cursor: pointer;
      }

      .button-row {
        /* button-row */

        /* Auto layout */
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: end;
        padding: 0px;
        gap: 4px;

        margin: 0 auto;
        width: 30%;
        height: 100%;

        /* Inside auto layout */
        flex: none;
        order: 1;
        flex-grow: 0;
      }

      text {
        width: 70%;
        text-align: left;
        font-size: 1.8em;
      }
    }

    .content {
      /* content-side */

      box-sizing: border-box;

      width: 100%;
      height: 90%;

      background: #ffffff;
      border-width: 2px 1px 1px 2px;
      border-style: solid;
      border-color: #3a3a3a;
      box-shadow: inset 4px 4px 4px rgba(0, 0, 0, 0.25);

      /* Inside auto layout */
      flex: none;
      order: 1;
      flex-grow: 0;
    }
  }
</style>
