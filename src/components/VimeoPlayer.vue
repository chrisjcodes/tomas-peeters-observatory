<template>
  <div :class="$props.theme">
    <iframe
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

export default {
  name: "VimeoPlayer",
  props: {
    videoId: { type: String, default: "" },
    theme: { type: String, default: "" },
    options: { type: Object, default: () => ({ background: 0 }) },
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
</style>
