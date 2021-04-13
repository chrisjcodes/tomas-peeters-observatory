<template>
  <div class="making-slide">
    <h1 v-if="showTitle" class="making-title top">The Making Of</h1>
    <div class="making-slide-inner">
      <img :src="this.slideImageSrc" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MakingOfSlide",
  props: {
    slide: Object,
    name: String,
    showTitle: Boolean,
  },
  computed: {
    slideImageSrc() {
      return this.slide.image
        ? require(`@/assets/observatories/${this.$props.name}/images/making/${this.slide.image}`)
        : "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/theme/colors.scss";
@import "@/theme/media.scss";
@import "@/theme/sizing.scss";
@import "@/theme/typography.scss";

.making-slide {
  &-inner {
    display: flex;
    justify-content: center;

    img {
      object-fit: contain;
      height: 40vh;
      width: 100vw;

      @include media(">=tablet") {
        height: 50vh;
      }

      @include media(">=desktop") {
        height: 60vh;
      }
    }
  }
}

.making-title {
  margin: 0;
  padding: 0;
  text-align: center;
  font-weight: 100;
  font-size: map-get($font-sizing, "lg");
  letter-spacing: map-get($letter-spacing, "lg");

  &.top {
    margin-bottom: rem(20px);
  }
  &.bottom {
    margin-top: rem(20px);
  }

  @include media(">=tablet") {
    font-size: map-get($font-sizing, "jumbo");
    letter-spacing: map-get($letter-spacing, "jumbo");
  }
}
</style>
