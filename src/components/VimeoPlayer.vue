<template>
  <div class="base" :class="[$props.theme, { loaded: isLoaded }]">
    <iframe
      ref="player"
      :src="`https://player.vimeo.com/video/${videoId}?${videoOptionsQuery}`"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
      controls="true"
    ></iframe>
  </div>
</template>

<script>
import qs from "query-string";
import Player from "@vimeo/player";

export default {
  name: "VimeoPlayer",
  props: {
    videoId: { type: String, default: "" },
    theme: { type: String, default: "" },
    options: { type: Object, default: () => ({ background: 0 }) },
  },
  data() {
    return {
      player: null,
      isLoaded: false,
    };
  },
  mounted() {
    this.player = new Player(this.$refs.player);
    this.player?.on("loaded", () => {
      this.$data.isLoaded = true;
    });
  },
  beforeDestroy() {
    this.player?.off("loaded");
  },
  computed: {
    videoOptionsQuery() {
      return qs.stringify(this.$props.options);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/theme/colors.scss";
@import "@/theme/sizing.scss";
@import "@/theme/typography.scss";

.base {
  transition: opacity 3000ms ease;
  opacity: 0;

  &.loaded {
    opacity: 1;
  }
}

.landing-loop {
  display: flex;
  justify-content: center;
  margin-bottom: rem(20px);

  iframe {
    max-width: 100%;
    height: auto;
  }

  @include media(">=tablet") {
    iframe {
      width: 100%;
      height: 40vh;
    }
  }

  @include media(">=desktop") {
    iframe {
      width: 80%;
      height: 60vh;
    }
  }
}

.observatory {
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

.theatre {
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
