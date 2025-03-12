import type { LinkRelated } from "../../states/link_related_state.svelte";
import type { Link } from "../../../models/link.svelte";

function startMenuHandler(start_menu_state: LinkRelated) {

  //TODO: implement fetching
  let fetcher = () => {
    const link_1: Link = {
      key: 0,
      title: "Sakura goty",
      startmenu_photo:
        "https://firebasestorage.googleapis.com/v0/b/fatipage-a0067.firebasestorage.app/o/milk-link%2Fsakura.gif?alt=media&token=0deac380-54fd-492b-8471-117fad2b5553",
      taskbar_photo: null,
      window_photo: null,
    };

    const link_2: Link = {
      key: 1,
      title: "Sakura",
      startmenu_photo:
        "https://firebasestorage.googleapis.com/v0/b/fatipage-a0067.firebasestorage.app/o/milk-link%2Fsakura.gif?alt=media&token=0deac380-54fd-492b-8471-117fad2b5553",
      taskbar_photo: null,
      window_photo: null,
    };

    start_menu_state.links_list = [
      link_1, link_2
    ]

    return start_menu_state;
  }

  return {
    fetch_links: fetcher
  };
}

export default startMenuHandler;
