<script lang="ts">
  //TODO: make this a grabable
  import close_button from "../../assets/icon_buttons/close_icon.svg";
  import minimize_button from "../../assets/icon_buttons/minimize_icon.svg";
  import WindowButton from "./compontents/window_button.svelte";

  export let text;
  export let img_content;
</script>

<div class="window">
  <div class="app-bar">
    <h2>{text}</h2>
    <div class="button-row">
      <WindowButton icon={minimize_button} />
      <WindowButton icon={close_button} />
    </div>
  </div>

  <img class="content" src={img_content} alt="img for the content side" />
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

    background: #0e0f14;
    border-width: 0px 2px 2px 0px;
    border-style: solid;
    border-color: #3a3a3a;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

    .app-bar {
      /* little-window-bar */

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

      h2 {
        width: 70%;
        text-align: left;
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
