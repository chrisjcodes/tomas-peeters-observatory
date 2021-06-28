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
.background {
  min-height: 100%;
  position: fixed;
  z-index: -9999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgb(119, 119, 119) 70%
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
  align-items: center;
  width: 70vw;
  height: 70vh;
}
</style>
