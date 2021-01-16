<template>
  <router-link :to="`/observatory/${observatory.id}`"
    ><li class="menu-item">
      <span>
        <GradientText theme="yellow-to-gold">{{ observatory.id }}</GradientText>
      </span>
      <div class="menu-item-image">
        <img
          :src="
            require(`@/assets/observatories/${observatory.id}/images/${observatory.thumb_filename}`)
          "
          alt="#"
        />
      </div></li
  ></router-link>
</template>

<script>
import GradientText from "./GradientText";
export default {
  name: "ObservatoryTemplate",
  components: {
    GradientText,
  },
  props: {
    observatory: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "@/theme/media.scss";
@import "@/theme/sizing.scss";
@import "@/theme/typography.scss";

.menu-item {
  @include robotoSlabRegular;
  margin: rem(24px);
  text-align: center;
  text-transform: uppercase;
}

.menu-item-image {
  margin: rem(10px) auto 0 auto;
  border: rem(2px) solid white;
  width: rem(300px);
  height: rem(300px);

  img {
    width: 100%;
    height: 100%;
  }

  @include media(">=desktop") {
    width: rem(250px);
    height: rem(250px);
  }
}
</style>
