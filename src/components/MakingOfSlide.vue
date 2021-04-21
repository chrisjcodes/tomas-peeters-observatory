<template>
  <div class="making-slide">
    <div class="making-title-container">
      <h1 class="making-title top">The Making</h1>
    </div>
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
      border: solid rgba($white, 0.25) 1px;

      @include media(">=tablet") {
        height: 50vh;
      }

      @include media(">=desktop") {
        height: 60vh;
      }
    }
  }
}
.making-title-container {
  display: flex;
  justify-content: center;
}

.making-title {
  margin: 0;
  padding: 0;
  text-align: center;
  font-weight: 100;
  font-size: map-get($font-sizing, "lg");
  letter-spacing: map-get($letter-spacing, "lg");

  margin-left: map-get($letter-spacing, "lg");
  margin-bottom: rem(20px);

  @include media(">=tablet") {
    margin-left: map-get($letter-spacing, "jumbo");
    font-size: map-get($font-sizing, "jumbo2");
    letter-spacing: map-get($letter-spacing, "jumbo");
  }
}
</style>
