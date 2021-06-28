<template>
  <div>
    <div class="background" />
    <div class="outer-wrapper">
      <div class="player-wrapper">
        <VimeoPlayer theme="theatre" :videoId="videoId" />
      </div>
    </div>
  </div>
</template>
<script>
import VimeoPlayer from "@/components/VimeoPlayer";
export default {
  components: {
    VimeoPlayer,
  },
  computed: {
    videoId() {
      return this.$route.params.videokey || "";
    },
  },
};
</script>
<style lang="scss">
@import "@/theme/media.scss";

.background {
  min-height: 100%;
  position: fixed;
  z-index: -9999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(
    to bottom,
    hsl(0, 0%, 0%) 0%,
    hsl(0, 0%, 1.17%) 14.8%,
    hsl(0, 0%, 3.93%) 27.9%,
    hsl(0, 0%, 8.04%) 39.2%,
    hsl(0, 0%, 13.25%) 49%,
    hsl(0, 0%, 19.31%) 57.5%,
    hsl(0, 0%, 25.97%) 64.7%,
    hsl(0, 0%, 32.98%) 70.9%,
    hsl(0, 0%, 40.1%) 76.1%,
    hsl(0, 0%, 47.07%) 80.6%,
    hsl(0, 0%, 53.65%) 84.5%,
    hsl(0, 0%, 59.6%) 87.9%,
    hsl(0, 0%, 64.65%) 91%,
    hsl(0, 0%, 68.57%) 94%,
    hsl(0, 0%, 71.1%) 96.9%,
    hsl(0, 0%, 72%) 100%
  );
}

.outer-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

.player-wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  height: 50vh;

  @include media(">=tablet") {
    width: 70vw;
    align-items: center;
  }
}
</style>
