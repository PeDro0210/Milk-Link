<script lang="ts">
  import "../utils/general.scss";
  //Let's also make this the stateless side
  let { time } = $props();

  let new_time_casted: string = $state("");

  $effect(
    () =>
      (new_time_casted = time.toLocaleTimeString([], {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      })),
  );
</script>

<div id="clock">
  <text>{new_time_casted}</text>
</div>

<style lang="scss">
  /* taskbar-clock */
  //This will be pretty static ngl
  #clock {
    box-sizing: border-box;
    user-select: none;

    /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 20px;

    width: 128px;
    height: 36px;

    background: linear-gradient(90deg, #a33638 0%, #542738 100%);
    border-width: 0px 1px 1px 0px;
    border-style: solid;
    border-color: #3a3a3a;

    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
  }
</style>
