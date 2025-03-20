import type { LinkRelatedState } from "../../states/link_related_state.svelte";
import type { Link } from "../../../models/link.svelte";
import { api } from "../../global_handlers/global_handler.svelte";
function startMenuHandler() {
  let state: LinkRelatedState = {
    links_list: [],
  }



  //TODO: implement fetching
  let link_fetcher = async () => {
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
            startmenuIconUrl
          }
        }`
      }
    }).then((result: any) => {
      state.links_list = result.data.data.getLinks as Array<Link>
    })

  }

  return {
    getState: () => { return state; },
    getLinks: async () => {
      link_fetcher();
    }
  };
}

export default startMenuHandler;
