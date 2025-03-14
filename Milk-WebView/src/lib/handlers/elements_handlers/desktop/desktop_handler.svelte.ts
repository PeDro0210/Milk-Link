import type { LinkRelatedState } from "../../states/link_related_state.svelte";
import type { Link } from "../../../models/link.svelte";



function desktopHandler() {

  let state: LinkRelatedState = $state({
    links_list: [],
  });


  //TODO: implement fetching
  let fetcher = () => {
    const link_1: Link = {
      key: 0,
      title: "Sakura goty",
      window_photo:
        "https://firebasestorage.googleapis.com/v0/b/fatipage-a0067.firebasestorage.app/o/milk-link%2Fsakura.gif?alt=media&token=0deac380-54fd-492b-8471-117fad2b5553",
      taskbar_photo: null,
      startmenu_photo: null,
    };
    const link_2: Link = {
      key: 1,
      title: "Sakura",
      window_photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFhMBpxrwebN_WcQyME2cNmtDFqf7Ua8Wq4g&s",
      taskbar_photo: null,
      startmenu_photo: null,
    };

    return [
      link_1, link_2
    ]

  }

  return {
    getState: () => { return state },
    getLinks: () => { state.links_list = fetcher(); }
  };

}

export default desktopHandler;
