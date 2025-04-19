import type { LinkRelatedState } from "../../states/link_related_state.svelte";
import type { Link } from "../../../models/link.svelte";
import { api, loading_state } from "../../global_handlers/global_handler.svelte";
import { LoadableElements } from "../../global_handlers/utils.svelte";
function startMenuHandler() {
  let state: LinkRelatedState = $state({
    links_list: [],
  });


  let link_fetcher = async () => {
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
            startmenuIconUrl
          }
        }`
      }
    })
  };

  let loaderSetter = () => {
    loading_state.setLoaded(LoadableElements.startmenu);
  };



  return {
    getState: () => { return state; },
    getLinks: async () => {
      link_fetcher()
        .then((result: any) => {
          state.links_list = result.data.data.getLinks as Array<Link>;
        });
    },
    setLoaded: loaderSetter()
  };
}

export default startMenuHandler;
