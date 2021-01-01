<template>
  <div class="container">
    <header>
      <img src="@/assets/landing/images/logo.svg" />
    </header>
    <div class="content">
      <div class="landing-copy">
        <p>
          The Art Of Using Form To See Emptiness
        </p>
      </div>
      <div class="video-loop">
        <video src="@/assets/landing/videos/loop.mp4" autoplay loop muted />
      </div>
      <nav>
        <router-link to="explore-observatories">
          <p>
            Explore The Observatories
          </p>
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Landing",
  components: {},
};
</script>

<style lang="scss" scoped>
@import "@/theme/colors.scss";
@import "@/theme/media.scss";
@import "@/theme/sizing.scss";
@import "@/theme/typography.scss";

.container {
  margin-top: rem(45px);
  margin-right: rem(25px);
  margin-left: rem(25px);
  margin-bottom: rem(45px);

  @include media(">desktop") {
    max-width: rem(1200px);
    margin-right: auto;
    margin-left: auto;
  }
}

header {
  display: flex;
  justify-content: center;
  margin-bottom: rem(60px);

  img {
    height: 100%;
    width: 100%;
  }

  @include media(">=tablet") {
    img {
      width: 80%;
    }
  }

  @include media(">=desktop") {
    img {
      width: 60%;
    }
  }
}

.landing-copy {
  @include robotoLight;

  font-size: rem(16px);
  text-transform: uppercase;
  letter-spacing: rem(10px);
  text-align: center;
  margin-bottom: rem(50px);

  @include media(">=tablet") {
    font-size: rem(30px);
  }

  p {
    color: $silver;
  }
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
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: rem(16px);

  @include media(">=tablet") {
    font-size: rem(30px);
  }

  a {
    position: relative;
    text-transform: uppercase;
    letter-spacing: rem(10px);
    text-decoration: none;
    color: inherit;
  }

  p {
    margin: 0;
    padding-top: 0;
    padding-bottom: rem(10px);
    padding-left: 0;
    padding-right: 0;
    border-bottom: 1px solid $silver;
  }
}
</style>
