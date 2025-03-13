import type { WindowState } from "../../states/window_state.svelte";


/*
 *  First rule before anything, simplicty before doing weird sheningangs,
 *  The only way those are acceptable, is if they are faster, then... is just useless
 */
function windowHandler(window: Window & typeof globalThis, key: number) {

  let state: WindowState = $state({
    x_position: window.localStorage.getItem("positionX" + key) ??
      (-750 + 150 * (key + 1)).toString(),
    y_position: window.localStorage.getItem("positionY" + key) ??
      (-750 + 150 * (key + 1)).toString(),
    appbar_grabbed: false,
    show_error_pop_up: false
  });

  let window_position_changer = (e: any): string[] => {
    if (state.appbar_grabbed) {
      //The cool middle man
      let _x_pos: number = parseInt(state.x_position);
      let _y_pos: number = parseInt(state.y_position);

      _x_pos += e.movementX;
      _y_pos += e.movementY;

      window.localStorage.setItem("positionX" + key, _x_pos.toString());
      window.localStorage.setItem("positionY" + key, _y_pos.toString());

      //deparsing
      return [_x_pos.toString(), _y_pos.toString()];

    }
    return [state.x_position, state.y_position];
  };

  let move_to_front = (e: any) => {
    //! this is not a good practice, is not good for a higher abstraction to be messing with the DOM directly
    let all_windows = document.querySelectorAll(
      ".window",
    ) as NodeListOf<HTMLElement>;

    all_windows.forEach((win) => {
      win.style.zIndex = "0";
    });

    e.currentTarget.style.zIndex = "1";

  };


  return {
    getState: () => { return state; },
    onMoveToFront: (e: any) => {
      move_to_front(e);
    },
    onWindowPositionChange: (e: any) => {
      [state.x_position, state.y_position] = window_position_changer(e);
    },
    onAppbarGrabbed: (new_value: boolean) => {
      state.appbar_grabbed = new_value;
    },
    onShowError: (new_value: boolean) => {
      state.show_error_pop_up = new_value;
    },

  }

}

export default windowHandler;
