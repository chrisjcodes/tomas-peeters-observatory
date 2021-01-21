<template>
  <div>
    <div class="slide-inner slide-light">
      <div class="copy">
        <p>{{ sequence[1].text }}</p>
      </div>
      <div class="image">
        <img :src="getImgPath(`${sequence[1].slide_image}`)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SlickSlideTemplate",
  props: {
    sequence: Array,
  },
  methods: {
    getImgPath(imgName) {
      return imgName
        ? require(`@/assets/observatories/${this.sequence[1].id}/images/sequence/${imgName}`)
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

.slide-inner {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $silver;
  .copy {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 20vh;
    max-width: 95vw;
    @include media(">=tablet") {
      max-width: 85vw;
    }
  }
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
      font-size: rem(22px);
      letter-spacing: rem(8px);
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
}
</style>
