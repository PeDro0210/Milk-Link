<script lang="ts">
  import close_icon from "../../../../../assets/icon_errors/close_icon.svg";
  import { scale } from "svelte/transition";

  let { animation_options } = $props();
</script>

<error-pop-up aria-label="icon-button" transition:scale={animation_options}>
  <img class="icon-image" src={close_icon} alt="icon of the button" />
</error-pop-up>

<style lang="scss">
  error-pop-up {
    /* error-pop-up */

    box-sizing: border-box;

    /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;

    width: 32px;
    height: 32px;

    position: fixed;

    right: 10px;
    bottom: 10px;

    z-index: 25;
    background: #a13633;
    border: 1px solid #3a3a3a;
  }
</style>
