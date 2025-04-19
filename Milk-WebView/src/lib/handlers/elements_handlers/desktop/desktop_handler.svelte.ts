import type { LinkRelatedState } from "../../states/link_related_state.svelte";
import type { Link } from "../../../models/link.svelte";
import { api, loading_state } from "../../global_handlers/global_handler.svelte";
import { LoadableElements } from "../../global_handlers/utils.svelte";


function desktopHandler() {

  let state: LinkRelatedState = $state({
    links_list: [],
  });


  let fetcher = async () => {
    return api({
      url: "/graphql",
      method: "post",
      data: {
        query: `
        query{
          getLinks{
            key
            title
            link
            windowPhotoUrl
          }
        }`
      }
    });
  }

  let loaderSetter = () => {
    loading_state.setLoaded(LoadableElements.desktop);
  }

  return {
    getState: () => { return state },
    getLinks: async () => {
      fetcher()
        .then((result: any) => {
          state.links_list = result.data.data.getLinks as Array<Link>;
        });

    },
    setLoaded: loaderSetter()
  };

}

export default desktopHandler;
