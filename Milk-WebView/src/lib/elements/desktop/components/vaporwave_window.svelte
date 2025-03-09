<script lang="ts">
  import close_button from "../../../../assets/icon_buttons/close_icon.svg";
  import minimize_button from "../../../../assets/icon_buttons/minimize_icon.svg";
  import WindowButton from "./compontents/window_button.svelte";

  let { text, img_content, key } = $props();

  let x_position: string = $state(
    window.localStorage.getItem("positionX" + key) ??
      (-750 + 150 * key).toString(),
  );

  let y_position: string = $state(
    window.localStorage.getItem("positionY" + key) ??
      (-300 + 20 * key).toString(),
  );

  let appbar_grab: boolean = false;

  function move_window(e: any) {
    if (appbar_grab) {
      //The cool middle man
      let _x_pos: number = parseInt(x_position);
      let _y_pos: number = parseInt(y_position);

      _x_pos += e.movementX;
      _y_pos += e.movementY;

      //deparsing
      x_position = _x_pos.toString();
      y_position = _y_pos.toString();

      window.localStorage.setItem("positionX" + key, _x_pos.toString());
      window.localStorage.setItem("positionY" + key, _y_pos.toString());
    }
  }

  function move_to_front(e: any) {
    //! this is not a good practice, is not good for a higher abstraction to be messing with the DOM directly
    let all_windows = document.querySelectorAll(
      ".window",
    ) as NodeListOf<HTMLElement>;

    all_windows.forEach((win) => {
      win.style.zIndex = "0";
    });

    e.currentTarget.style.zIndex = "1";
  }
</script>

<svelte:window
  onmouseup={() => {
    appbar_grab = false;
  }}
  onmousemove={move_window}
/>

<div
  class="window"
  style="transform: translate({x_position}px,{y_position}px);"
  onmouseup={move_to_front}
>
  <!-- the button is or making the compiler happy-->
  <div
    class="app-bar"
    onmousedown={() => {
      appbar_grab = true;
    }}
  >
    <text>{text}</text>
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
        font-size: 2.2em;
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
