import type { LoadingState } from "../../states/loading_state.svelte";


function loadingHandler() {

  let state: LoadingState = $state({
    loaded: false,
  });


  let load = (loaded: boolean) => {
    setTimeout(() => {
      state.loaded = loaded;
    }, 3000)
  }

  return {
    getState: () => { return state },
    checkLoading: (loaded: boolean) => {
      load(loaded)
    }
  };

}

export default loadingHandler;
