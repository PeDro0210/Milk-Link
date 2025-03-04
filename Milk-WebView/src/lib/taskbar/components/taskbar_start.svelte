<script lang="ts">
  let icon_url: string =
    "https://firebasestorage.googleapis.com/v0/b/fatipage-a0067.firebasestorage.app/o/milk-link%2Fsakura.gif?alt=media&token=0deac380-54fd-492b-8471-117fad2b5553";
</script>

<button aria-label="icon-button">
  <img class="icon-image" src={icon_url} alt="icon of the button" />
  <div class="text">Start</div>
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

    width: 128px;
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
      order: 0;
      flex-grow: 0;
    }
    /* text */
    .text {
      width: 60px;
      height: 34px;

      font-family: "Jersey 10";
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 34px;
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
