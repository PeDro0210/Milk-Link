import type { Link } from "../../../models/link.svelte";
import type { TaskBar } from "../../states/taskbar_handler_state.svelte";

function taskbarHandler(taskbar_state: TaskBar) {

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

    taskbar_state.links_list = [
      link_1, link_2
    ]

    return taskbar_state;

  };


  let innerwidth_changer = (window_inner_width: number) => {
    taskbar_state.inner_width = window_inner_width - 335 + "px"  // Adjust the width calculation as needed

    let window_side = document.querySelector(".windows-side") as HTMLElement;
    window_side.style.setProperty("--window-width", taskbar_state.inner_width);
    return taskbar_state;

  };

  let time_fetcher = () => {
    taskbar_state.time = new Date();

    return taskbar_state
  };


  return {
    fetch_liks: links_fetcher,
    on_change_width: innerwidth_changer,
    fetch_time: time_fetcher
  }

}

export default taskbarHandler;
