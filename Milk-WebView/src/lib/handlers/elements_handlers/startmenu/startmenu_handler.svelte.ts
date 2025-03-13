import type { LinkRelatedState } from "../../states/link_related_state.svelte";
import type { Link } from "../../../models/link.svelte";

function startMenuHandler() {
  let state: LinkRelatedState = {
    links_list: []
  }



  //TODO: implement fetching
  let link_fetcher = () => {
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

    return [
      link_1, link_2
    ]

  }

  return {
    getState: () => { return state; },
    fetch_links: () => {
      state.links_list = link_fetcher();
    }
  };
}

export default startMenuHandler;
