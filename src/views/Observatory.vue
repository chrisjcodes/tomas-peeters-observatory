<template>
  <Container>
    <header>
      <img src="@/assets/landing/images/logo.svg" />
    </header>
    <div class="observatory-copy">
      <p>
        The Art Of Using Form To See Emptiness
      </p>
    </div>
    <div id="video-container"></div>
    <nav>
      <CustomLink to="/observatory/I/sequence">
        <p>
          Genesis
        </p>
      </CustomLink>
      <CustomLink to="/#">
        <p>
          More
        </p>
      </CustomLink>
    </nav>
  </Container>
</template>

<script>
import Container from "../components/Container";
import CustomLink from "../components/CustomLink";
import Player from "@vimeo/player";

export default {
  name: "Observatory",
  components: {
    Container,
    CustomLink,
  },
  mounted() {
    const screenWidth = window.innerWidth;
    let videoOptions = {
      id: "https://vimeo.com/82886396",
      width: screenWidth,
      background: 1,
    };
    const player = new Player("video-container", videoOptions);
    player.on("ended", () => {
      console.log("video end");
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/theme/colors.scss";
@import "@/theme/media.scss";
@import "@/theme/sizing.scss";
@import "@/theme/typography.scss";

header {
  display: flex;
  justify-content: center;
  margin-bottom: rem(60px);

  img {
    height: 100%;
    width: 100%;
  }
}

.observatory-copy {
  @include robotoLight;
  font-size: rem(16px);
  text-transform: uppercase;
  letter-spacing: rem(10px);
  text-align: center;
  margin-bottom: rem(80px);
  @include media(">=tablet") {
    font-size: rem(30px);
  }
  p {
    color: $silver;
  }
}

#video-container {
  margin-bottom: rem(50px);
  display: flex;
  justify-content: center;
  align-items: center;
  iframe {
    position: absolute;
    border: 0;
  }
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: rem(16px);
  @include media(">=tablet") {
    font-size: rem(30px);
  }
  a {
    position: relative;
    text-transform: uppercase;
    letter-spacing: rem(8px);
    text-decoration: none;
    color: inherit;
    margin: rem(10px);
    width: 50%;
  }

  p {
    padding-top: 0;
    padding-bottom: rem(10px);
    padding-left: 0;
    padding-right: 0;
    border-bottom: 1px solid $silver;
  }
}
</style>
