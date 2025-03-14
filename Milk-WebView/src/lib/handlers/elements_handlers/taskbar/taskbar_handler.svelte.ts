import type { Link } from "../../../models/link.svelte";
import type { TaskBarState } from "../../states/taskbar_state.svelte";


/*
 *  First rule before anything, simplicty before doing weird sheningangs,
 *  The only way those are acceptable, is if they are faster, then... is just useless
 */
function taskbarHandler() {

  let state: TaskBarState = $state({
    links_list: [],
    inner_width: "",
    time: new Date(),
  });

  let state_getter = () => {
    return state;
  }

  let links_fetcher = () => {
    const link_1: Link = {
      key: 0,
      title: "Sakura goty",
      taskbar_photo:
        "https://firebasestorage.googleapis.com/v0/b/fatipage-a0067.firebasestorage.app/o/milk-link%2Fsakura.gif?alt=media&token=0deac380-54fd-492b-8471-117fad2b5553",
      window_photo: null,
      startmenu_photo: null,
    };

    const link_2: Link = {
      key: 1,
      title: "Sakura",
      taskbar_photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFhMBpxrwebN_WcQyME2cNmtDFqf7Ua8Wq4g&s",
      window_photo: null,
      startmenu_photo: null,
    };

    return [
      link_1, link_2
    ]


  };


  let innerwidth_changer = (window_inner_width: number) => {
    let new_inner_width = window_inner_width - 335 + "px"  // Adjust the width calculation as needed

    let window_side = document.querySelector(".windows-side") as HTMLElement;
    window_side.style.setProperty("--window-width", new_inner_width);

    return new_inner_width;

  };

  let time_fetcher = () => {
    return new Date();
  };


  return {
    getState: state_getter,
    getLinks: () => {
      state.links_list = links_fetcher();
    },
    onChangeWidth: (window_width: number) => {
      state.inner_width = innerwidth_changer(window_width);
    },
    getTime: () => {
      setInterval(() => {
        state.time = time_fetcher();
      }, 6000);

    }
  }

}

export default taskbarHandler;
