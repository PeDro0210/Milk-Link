<div class="separator">
  <!-- Ignore the warning LMAO-->
  <separator-line />
</div>

<style lang="scss">
  .separator {
    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;

    width: 5px;
    height: 36px;

    margin: 10px;

    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
  }
  separator-line {
    width: 4px;
    height: 36px;

    border-left: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
  }
</style>
