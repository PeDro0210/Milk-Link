<script lang="ts">
  let {
    icon,
    on_click_function,
  }: { icon: string; on_click_function: () => void } = $props();
</script>

<button aria-label="icon-button" onclick={on_click_function}>
  <img class="icon-image" src={icon} alt="icon of the button" />
</button>

<style lang="scss">
  button {
    /* window-button */

    box-sizing: border-box;

    /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    padding: 3px;
    gap: 10px;

    width: 24px;
    height: 24px;

    background: #0e0f14;
    box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.25);
  }
</style>
