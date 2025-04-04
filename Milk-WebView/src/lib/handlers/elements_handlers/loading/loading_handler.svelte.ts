import type { LoadingState } from "../../states/loading_state.svelte";


function loadingHandler() {

  let state: LoadingState = $state({
    loaded: false,
  });


  let load = (loaded: boolean) => {
    if (loaded) {
      setTimeout(() => {
        state.loaded = true;
      }, 3000)
    }
    console.log(state.loaded);

  }

  return {
    getState: () => { return state },
    checkLoading: (loaded: boolean) => {
      load(loaded)
    }
  };

}

export default loadingHandler;
