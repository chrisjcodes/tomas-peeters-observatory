<template>
  <div>
    <div class="logo">
      <img src="@/assets/landing/images/logo.svg" />
    </div>
    <div class="landing-copy">
      <GradientText theme="gray-to-white">
        The Art Of Using Form To See Emptiness
      </GradientText>
    </div>
    <div class="video-loop">
      <video src="@/assets/landing/videos/loop.mp4" autoplay loop muted />
    </div>
    <nav>
      <router-link to="explore-observatories">
        <GradientText theme="gray-to-white">
          Explore The Observatories
        </GradientText>
      </router-link>
    </nav>
  </div>
</template>

<script>
import GradientText from "@/components/GradientText";

export default {
  name: "Landing",
  components: {
    GradientText,
  },
};
</script>

<style lang="scss" scoped>
@import "@/theme/colors.scss";
@import "@/theme/media.scss";
@import "@/theme/sizing.scss";
@import "@/theme/typography.scss";

.logo {
  display: flex;
  justify-content: center;
  width: 100vw;
  height: rem(150px);
  margin-bottom: rem(50px);

  img {
    width: 100%;
  }
}

.landing-copy {
  @include robotoLight;

  font-size: rem(26px);
  text-transform: uppercase;
  letter-spacing: rem(15px);
  text-align: center;
  margin-bottom: rem(50px);
}

.video-loop {
  display: flex;
  justify-content: center;
  margin-bottom: rem(50px);
}

nav {
  display: flex;
  justify-content: center;

  a {
    position: relative;
    font-size: rem(26px);
    text-transform: uppercase;
    letter-spacing: rem(15px);
    text-decoration: none;

    &:after {
      content: "";
      position: absolute;
      bottom: -12px;
      left: -10px;
      width: 100%;
      height: 1px;
      background-color: $white;
      // transform: scale(0);
      // transform-origin: center;
      // transition: transform 500ms ease-in-out;
    }

    // &:hover {
    //   &:after {
    //     transform: scale(1);
    //   }
    // }
  }
}
</style>
