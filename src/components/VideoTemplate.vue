<template>
  <div class="video-loop">
    <iframe
      :src="`https://player.vimeo.com/video/${url_id}?background=1`"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "VideoTemplate",
  props: {
    url_id: { type: String, default: "" },
  },
};
</script>

<style lang="scss" scoped>
.video-loop {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
