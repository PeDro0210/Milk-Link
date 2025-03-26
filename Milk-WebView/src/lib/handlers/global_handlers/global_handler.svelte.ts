import axios from "axios";

export const reactivity_startmenu_state = $state({
  //for managing the start menu reactivity
  slide_start_menu: false,
  toggle: () => {
    reactivity_startmenu_state.slide_start_menu = !reactivity_startmenu_state.slide_start_menu;
  },
  changeSelfAlign: (aligment_type: string) => {
    let window_side = document.querySelector("#start-menu") as HTMLElement;
    if (window_side != null) {
      //Will just recieve the flex-start or the center
      console.log(aligment_type)
      window_side.style.setProperty("--aligment", aligment_type);
    }
  }
});

export const window_state = $state({
  window_width: window.innerWidth,
  changeInnerWidth: () => {
    window.addEventListener("resize", () => { window_state.window_width = window.innerWidth });
  }
});

export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL
})
