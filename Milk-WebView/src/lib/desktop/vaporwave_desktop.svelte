<script lang="ts">
  import VaporwaveWindow from "./components/vaporwave_window.svelte";

  let url: string =
    "https://firebasestorage.googleapis.com/v0/b/fatipage-a0067.firebasestorage.app/o/milk-link%2Fsakura.gif?alt=media&token=0deac380-54fd-492b-8471-117fad2b5553";
  let second_url: string =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFhMBpxrwebN_WcQyME2cNmtDFqf7Ua8Wq4g&s";
</script>

<div class="desktop">
  <!--TODO: add the respective key for each window-->
  <VaporwaveWindow text={"SAKURA"} img_content={url} key={1} />
  <VaporwaveWindow text={"SAKURA"} img_content={second_url} key={2} />
  <VaporwaveWindow text={"SAKURA"} img_content={second_url} key={3} />
  <VaporwaveWindow text={"SAKURA"} img_content={url} key={4} />
  <VaporwaveWindow text={"SAKURA"} img_content={second_url} key={5} />
  <VaporwaveWindow text={"SAKURA"} img_content={url} key={6} />
  <VaporwaveWindow text={"SAKURA"} img_content={url} key={7} />
</div>
