import axios from "axios";

export const global_state = $state({

  //for managing the start menu reactivity
  slide_start_menu: true,
  toggle: () => {
    global_state.slide_start_menu = !global_state.slide_start_menu;
  },

});

export const api = axios.create({
  baseURL: "http://backend:5000"
})
