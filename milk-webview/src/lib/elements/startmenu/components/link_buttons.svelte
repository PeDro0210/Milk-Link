<script lang="ts">
  let {
    icon_url,
    text,
    on_click_function,
  }: {
    icon_url: string;
    text: string | null;
    on_click_function: () => void;
  } = $props();
</script>

<button class="taskbar-button" onclick={on_click_function}>
  <img class="icon" src={icon_url} alt="icon of the link button" />
  <text>{text ?? "PLACEHOLDER"}</text>
</button>

<style lang="scss">
  .taskbar-button {
    /* taskbar-button */

    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 0px 0px 5px;
    gap: 10px;

    width: 100%;
    height: 56px;

    background: linear-gradient(90deg, #a33638 0%, #542738 100%);
    border-bottom: 2px solid var(--border-color);

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;

    /* text */
    text {
      width: 80%;
      height: 17px;

      font-family: "Jersey 10";
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 17px;
      display: flex;
      align-items: center;

      color: #ffffff;

      /* Inside auto layout */
      flex: none;
      order: 1;
      flex-grow: 0;
    }

    .icon {
      width: 32px;
      height: 32px;
    }
  }
</style>
