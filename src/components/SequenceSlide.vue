<template>
  <div>
    <div class="slide-inner slide-light">
      <div class="copy show-desktop">
        <p>{{ slide.copyA }}</p>
        <p>{{ slide.copyB }}</p>
      </div>
      <div class="copy show-mobile">
        <p>{{ slide.copyA }} {{ slide.copyB }}</p>
      </div>
      <div class="image">
        <img :src="this.slideImageSrc" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SlickSlideTemplate",
  props: {
    slide: Object,
    name: String,
  },
  computed: {
    slideImageSrc() {
      return this.slide.image
        ? require(`@/assets/observatories/${this.$props.name}/images/sequence/${this.slide.image}`)
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

.copy {
  display: flex;
  flex-direction: column;
  height: 15vh;
  max-width: 95vw;
  padding-top: 5vh;

  p {
    font-size: rem(16px);
    text-transform: uppercase;
    text-align: center;
    margin-top: 0;
    margin-bottom: 15px;
    letter-spacing: rem(2px);
    line-height: 1.5;
    color: $scorpion;

    @include media(">=tablet") {
      font-size: rem(18px);
      letter-spacing: rem(5px);
    }

    @include media(">=desktop") {
      font-size: rem(20px);
      letter-spacing: rem(6px);
    }
  }
}

.show-desktop {
  @include media("<desktop") {
    display: none;
  }
}

.show-mobile {
  @include media(">=desktop") {
    display: none;
  }
}

.image {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;

  img {
    max-width: 90vw;
    max-height: 40vh;
    box-shadow: rgba(0, 0, 0, 0.349) 0px 0px 45px;
  }

  @include media(">=tablet") {
    height: 60vh;
    img {
      max-height: 50vh;
    }
  }
  @include media(">=desktop") {
    height: 70vh;
    img {
      max-height: 65vh;
    }
  }
}

.slide-inner {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $silver;
}
</style>
