<script lang="ts">
  let { icon_url, text } = $props();
</script>

<button class="taskbar-button">
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
    border-bottom: 2px solid #3a3a3a;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;

    .icon {
      /* icon */

      box-sizing: border-box;

      width: 32px;
      height: 32px;

      background: #ffece0;
      border-width: 0px 1px 1px 0px;
      border-style: solid;
      border-color: #3a3a3a;

      /* Inside auto layout */
      flex: none;
      order: 0;
      flex-grow: 0;
    }

    /* text */
    text {
      width: 19px;
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
  }
</style>
