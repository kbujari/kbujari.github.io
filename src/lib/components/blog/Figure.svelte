<script>
  export let src
  let type = (src.endsWith("png")) ? "image/png" : "image/jpeg"
</script>

<div class="flex justify-center w-full">
  <picture>
    <source srcset={src + ".webp"} type="image/webp">
    <source srcset={src} {type}>
    <img src={src} alt="blog figure">
  </picture>
</div>
