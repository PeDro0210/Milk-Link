<script lang="ts">
</script>

<div class="separator">
  <!-- Ignore the error LMAO-->
  <separator-line />
</div>

<style lang="scss">
  .separator {
    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;

    width: 2px;
    height: 36px;

    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
  }
  separator-line {
    width: 4px;
    height: 36px;

    border-left: 1px solid #3a3a3a;
    border-right: 1px solid #3a3a3a;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
  }
</style>
