<script lang="ts">
  import VaporwaveTaskbar from "./lib/taskbar/vaporwave_taskbar.svelte";
  import VaporwaveWindow from "./lib/window/vaporwave_window.svelte";

  let url: string =
    "https://firebasestorage.googleapis.com/v0/b/fatipage-a0067.firebasestorage.app/o/milk-link%2Fsakura.gif?alt=media&token=0deac380-54fd-492b-8471-117fad2b5553";
  let second_url: string =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFhMBpxrwebN_WcQyME2cNmtDFqf7Ua8Wq4g&s";
</script>

<main>
  <VaporwaveWindow text={"SAKURA"} img_content={url} />
  <VaporwaveWindow text={"SAKURA"} img_content={second_url} />
</main>

<footer>
  <VaporwaveTaskbar />
</footer>
