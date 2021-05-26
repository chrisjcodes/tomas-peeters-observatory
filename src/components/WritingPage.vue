<template>
  <div class="writing-page">
    <div class="root">
      <div class="background" />
      <Container containOn="x">
        <h1 class="title top"><slot name="titleA"></slot></h1>
      </Container>
      <div
        class="main-image"
        :style="{
          'background-image': 'url(' + this.imagePath + ')',
        }"
      />
      <Container containOn="x">
        <h1 class="title bottom"><slot name="titleB"></slot></h1>
      </Container>
      <Container containOn="x">
        <div class="copy-container">
          <div class="body-copy">
            <slot name="copy"></slot>
          </div>
        </div>
      </Container>
    </div>
  </div>
</template>

<script>
import Container from "@/components/Container";
export default {
  components: {
    Container,
  },
  props: {
    imageFileName: String,
  },
  computed: {
    imagePath() {
      return this.$props.imageFileName
        ? require(`@/assets/writing-pages/${this.$props.imageFileName}`)
        : "";
    },
  },
};
</script>

<style lang="scss">
@import "@/theme/colors.scss";
@import "@/theme/media.scss";
@import "@/theme/sizing.scss";
@import "@/theme/typography.scss";
.writing-page {
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

  .root {
    margin-top: rem(65px);
    color: rgba(0, 0, 0, 1);

    @include media(">=tablet") {
      margin-top: rem(40px);
    }
  }

  .title {
    text-align: center;
    font-weight: 300;
    font-size: map-get($font-sizing, "xl");
    letter-spacing: map-get($letter-spacing, "xl");

    &.top {
      @include media(">=tablet") {
        margin-bottom: rem(30px);
      }
    }

    &.bottom {
      @include media(">=tablet") {
        margin-top: rem(30px);
        margin-bottom: rem(30px);
      }
    }

    @include media(">=tablet") {
      font-size: map-get($font-sizing, "jumbo2");
      letter-spacing: map-get($letter-spacing, "jumbo");
    }
  }

  .main-image {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 29.8vw;
    width: 100vw;
  }

  .copy-container {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: rem(20px);
  }

  .body-copy {
    font-size: map-get($font-sizing, "lg");
    text-transform: none;
    color: $black;
    line-height: 1.75;
    text-align: justify;

    p:first-child {
      margin-top: 0 !important;
      padding-top: 0 !important;
    }

    @include media(">=desktop") {
      width: 90%;
    }
  }
}
</style>
