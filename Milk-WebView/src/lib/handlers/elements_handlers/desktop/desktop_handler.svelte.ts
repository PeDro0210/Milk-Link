import type { LinkRelatedState } from "../../states/link_related_state.svelte";
import type { Link } from "../../../models/link.svelte";
import { api } from "../../global_handlers/global_handler.svelte";


function desktopHandler() {

  let state: LinkRelatedState = $state({
    links_list: [],
  });


  //TODO: implement fetching
  let fetcher = async () => {
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
            windowPhotoUrl
          }
        }`
      }
    }).then((result: any) => {
      state.links_list = result.data.data.getLinks as Array<Link>
    })
  }

  return {
    getState: () => { return state },
    getLinks: async () => {
      fetcher();
    }
  };

}

export default desktopHandler;
