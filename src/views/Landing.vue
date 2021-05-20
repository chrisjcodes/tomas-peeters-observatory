<template>
  <div class="center">
    <div class="inner">
      <Container containOn="x">
        <header>
          <img src="@/assets/landing/images/logo.svg" />
        </header>
        <p class="landing-copy">
          <!-- Attempt a hard break on this text at "See" -->
          The Art Of Using Form To See Emptiness
        </p>
      </Container>
      <VimeoPlayer
        theme="landing-loop"
        videoId="504637617"
        :options="{
          background: 0,
          autoplay: 1,
          controls: 0,
          loop: 1,
          muted: 1,
        }"
      />
      <Container containOn="x">
        <nav>
          <CustomLink
            theme="ul-light-primary-pulse"
            to="/explore-observatories"
          >
            Explore The Observatories
          </CustomLink>
        </nav>
      </Container>
    </div>
  </div>
</template>

<script>
import Container from "@/components/Container";
import CustomLink from "@/components/CustomLink";
import VimeoPlayer from "@/components/VimeoPlayer";

export default {
  name: "Landing",
  components: {
    Container,
    CustomLink,
    VimeoPlayer,
  },
};
</script>

<style lang="scss" scoped>
@import "@/theme/colors.scss";
@import "@/theme/sizing.scss";
@import "@/theme/typography.scss";

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.center {
  display: flex;
  align-items: center;
  height: 100vh;
  animation-name: fadeIn;
  animation-duration: 5000ms;
  animation-timing-function: ease-in-out;
}

.inner {
  width: 100vw;
}

header {
  display: flex;
  justify-content: center;

  img {
    height: 100%;
    width: 100%;
  }

  @include media(">=tablet") {
    img {
      width: 70%;
    }
  }

  @include media(">=desktop") {
    img {
      width: 50%;
    }
  }
}

.landing-copy {
  margin-bottom: rem(20px);
  text-align: center;
  letter-spacing: map-get($letter-spacing, "lg");
  font-size: map-get($font-sizing, "sm");

  @include media(">=tablet") {
    letter-spacing: map-get($letter-spacing, "md");
    font-size: map-get($font-sizing, "lg");
  }

  // @include media(">=desktop") {
  //   letter-spacing: map-get($letter-spacing, "xl");
  //   font-size: map-get($font-sizing, "md");
  // }
}

nav {
  display: flex;
  justify-content: center;
  text-align: center;
  letter-spacing: map-get($letter-spacing, "xs");
  font-size: map-get($font-sizing, "sm");

  @include media(">=tablet") {
    letter-spacing: map-get($letter-spacing, "md");
    font-size: map-get($font-sizing, "lg");
  }

  //   @include media(">=desktop") {
  //     letter-spacing: map-get($letter-spacing, "xl");
  //     font-size: map-get($font-sizing, "md");
  //   }
}
</style>
