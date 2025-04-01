import type { Link } from "../../../models/link.svelte";
import type { TaskBarState } from "../../states/taskbar_state.svelte";
import { api, loading_state } from "../../global_handlers/global_handler.svelte";
import { LoadableElements } from "../../global_handlers/utils.svelte";

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

  //TODO: implement the API fetching
  let links_fetcher = async () => {
    api({
      url: "/graphql",
      method: "post",
      data: {
        query: `
        query{
          getLinks{
            key
            title
            link
            taskbarIconUrl
          }
        }`
      }
    }).then((result: any) => {
      state.links_list = result.data.data.getLinks as Array<Link>
      loading_state.setLoaded(LoadableElements.taskbar);
    })

  };

  //Changes the innerwidth of the taskbar and changes css variable of the window-width 
  //Ik i'm using scss, but GRAWWWWWWWWW, PREPROCESSORS
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
    getLinks: async () => {
      links_fetcher();
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
