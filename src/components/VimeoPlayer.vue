<template>
  <div class="video-loop">
    <iframe
      :src="`https://player.vimeo.com/video/${videoId}?background=0`"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
      controls="true"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "VimeoPlayer",
  props: {
    videoId: { type: String, default: "" },
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