//No need for that much explanation
export const global_state = $state({
  slide_start_menu: false,
  toggle: () => {
    global_state.slide_start_menu = !global_state.slide_start_menu;
  },
});
