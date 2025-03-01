<script lang="ts">
  export let icon;
</script>

<div class="appbar-button" aria-label="icon-button">
  <img class="icon-image" src={icon} alt="icon of the button" />
</div>

<style lang="scss">
  .appbar-button {
    /* minimize-button */

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
    border-width: 0px 1px 1px 0px;
    border-style: solid;
    border-color: #3a3a3a;
    box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.25);

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
  }
</style>
