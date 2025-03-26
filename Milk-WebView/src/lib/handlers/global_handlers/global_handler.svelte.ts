import axios from "axios";

export const reactivity_startmenu_state = $state({
  //for managing the start menu reactivity
  slide_start_menu: true,
  toggle: () => {
    reactivity_startmenu_state.slide_start_menu = !reactivity_startmenu_state.slide_start_menu;
  },
});

export const window_state = $state({
  window_width: window.innerWidth,
  changeInnerWidth: () => {
    window.addEventListener("resize", () => { window_state.window_width = window.innerWidth });
  }
});

export const api = axios.create({
  baseURL: "http://localhost:5000"
})
