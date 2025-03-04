<script lang="ts">
  import Separator from "./components/separator.svelte";
  import TaskbarStart from "./components/taskbar_start.svelte";
</script>

<div class="taskbar">
  <TaskbarStart />
  <Separator />
  <div class=""></div>
</div>

<style lang="scss">
  .taskbar {
    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 10px 10px;
    gap: 13px;

    position: relative;
    width: 100%;
    height: 56px;

    background: #0e0f14;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  }
</style>
