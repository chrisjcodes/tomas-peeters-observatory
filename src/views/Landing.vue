<template>
  <Container headerImage="@/assets/landing/images/logo.svg">
    <div class="content">
      <p class="landing-copy">
        The Art Of Using Form To See Emptiness
      </p>
      <div class="video-loop">
        <video src="@/assets/landing/videos/loop.mp4" autoplay loop muted />
      </div>
      <nav>
        <CustomLink to="/explore-observatories">
          Explore The Observatories
        </CustomLink>
      </nav>
    </div>
  </Container>
</template>

<script>
import Container from "../components/Container";
import CustomLink from "../components/CustomLink";

export default {
  name: "Landing",
  components: {
    Container,
    CustomLink,
  },
};
</script>

<style lang="scss" scoped>
@import "@/theme/colors.scss";
@import "@/theme/sizing.scss";
@import "@/theme/typography.scss";

.landing-copy {
  @include largeBody;
  color: $silver;
  margin-bottom: rem(50px);
}

.video-loop {
  display: flex;
  justify-content: center;
  margin-bottom: rem(50px);

  video {
    max-width: 100%;
    height: auto;
  }
}

nav {
  @include largeBody;
  display: flex;
  justify-content: center;
}
</style>
