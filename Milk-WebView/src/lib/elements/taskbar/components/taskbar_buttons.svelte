<script lang="ts">
  import "../utils/general.scss";
  let {
    icon_url,
    text,
    width,
    key,
    on_click_function,
  }: {
    icon_url: string;
    text: string | null;
    width: string | null;
    on_click_function: () => void;
    key: number | null;
  } = $props();
</script>

<button
  aria-label="takbar-button"
  style="--width:{width ?? '256px'}"
  onclick={on_click_function}
>
  <img class="icon-image" src={icon_url} alt="icon of the button" />
  <text>{text ?? "PLACEHOLDER"}</text>
</button>

<style lang="scss">
  /*I just copy from the figma code*/
  button {
    box-sizing: border-box;

    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 0px 0px 5px;
    gap: 10px;

    width: 256px;
    height: 36px;

    width: var(--width);
    height: 36px;

    background: linear-gradient(90deg, #a33638 0%, #542738 100%);

    /* icon */
    .icon-image {
      box-sizing: border-box;

      width: 32px;
      height: 32px;

      background: #ffece0;
      border-width: 0px 1px 1px 0px;
      border-style: solid;
      border-color: #3a3a3a;

      /* Inside auto layout */
      flex: none;
      order: 1;
      flex-grow: 0;
    }
  }
</style>
