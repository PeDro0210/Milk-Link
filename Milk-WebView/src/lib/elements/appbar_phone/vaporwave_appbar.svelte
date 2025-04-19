<script lang="ts">
  import taskbarHandler from "../../handlers/elements_handlers/taskbar/taskbar_handler.svelte";
  import type { TaskBarState } from "../../handlers/states/taskbar_state.svelte";
  import TaskbarClock from "../taskbar/components/taskbar_clock.svelte";

  let handler = taskbarHandler();

  let state: TaskBarState = $state(handler.getState());

  //Managing the date for the clock
  $effect(() => {
    handler.getTime();
  });
</script>

<div id="taskbar">
  <TaskbarClock time={state.time} />
</div>

<style lang="scss">
  #taskbar {
    justify-content: center;
    position: absolute;
    top: 0;
    height: 5.5vh;
  }
</style>
