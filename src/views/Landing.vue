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
      <div class="video-loop">
        <!-- <VimeoPlayer videoId="504637617" /> -->
        <video src="@/assets/landing/videos/loop.mp4" autoplay loop muted />
      </div>
      <Container containOn="x">
        <nav>
          <CustomLink to="/explore-observatories">
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
// import VimeoPlayer from "@/components/VimeoPlayer";

export default {
  name: "Landing",
  components: {
    Container,
    CustomLink,
    // VimeoPlayer,
  },
};
</script>

<style lang="scss" scoped>
@import "@/theme/colors.scss";
@import "@/theme/sizing.scss";
@import "@/theme/typography.scss";

.center {
  display: flex;
  align-items: center;
  height: 100vh;
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
      width: 42%;
    }
  }
}

.landing-copy {
  margin-bottom: rem(20px);
  text-align: center;
  letter-spacing: map-get($letter-spacing, "xs");
  font-size: map-get($font-sizing, "sm");

  @include media(">=tablet") {
    letter-spacing: map-get($letter-spacing, "md");
    font-size: map-get($font-sizing, "body");
  }

  // @include media(">=desktop") {
  //   letter-spacing: map-get($letter-spacing, "xl");
  //   font-size: map-get($font-sizing, "md");
  // }
}

.video-loop {
  display: flex;
  justify-content: center;
  margin-bottom: rem(20px);

  video {
    max-width: 100%;
    height: auto;
  }

  @include media(">=tablet") {
    video {
      width: 100%;
      height: 40vh;
    }
  }

  @include media(">=desktop") {
    video {
      width: 80%;
      height: 60vh;
    }
  }
}

nav {
  display: flex;
  justify-content: center;
  text-align: center;
  letter-spacing: map-get($letter-spacing, "xs");
  font-size: map-get($font-sizing, "sm");

  @include media(">=tablet") {
    letter-spacing: map-get($letter-spacing, "md");
    font-size: map-get($font-sizing, "body");
  }

  //   @include media(">=desktop") {
  //     letter-spacing: map-get($letter-spacing, "xl");
  //     font-size: map-get($font-sizing, "md");
  //   }
}
</style>
