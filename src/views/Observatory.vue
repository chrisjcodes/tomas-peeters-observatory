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
    <div class="video-loop">
      <video src="@/assets/landing/videos/loop.mp4" autoplay loop muted />
    </div>
    <!-- video is injected into this div
    <div id="video-container"></div>
    -->
    <nav>
      <ul>
        <li>
          <CustomLink to="/observatory/I/sequence">
            Genesis
          </CustomLink>
        </li>
        <li>
          <CustomLink to="/#">
            More
          </CustomLink>
        </li>
      </ul>
    </nav>
  </Container>
</template>

<script>
import Container from "../components/Container";
import CustomLink from "../components/CustomLink";
// import Player from "@vimeo/player";

export default {
  name: "Observatory",
  components: {
    Container,
    CustomLink,
  },
  /* -- Allows to listen to on video end event
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
  }, */
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

.video-loop {
  display: flex;
  justify-content: center;
  margin-bottom: rem(50px);

  video {
    max-width: 100%;
    height: auto;
  }
}

/*
#video-container {
  display: flex;
  justify-content: center;
  align-items: center;

  iframe {
    position: absolute;
    border: 0;
  }
}
*/

nav {
  display: flex;
  justify-content: center;
}

nav ul {
  display: table;
  width: 100%;
  margin: 0;
  padding: 0;
}

nav ul li {
  display: table-cell;
  width: calc(100% / 2); /* calc(100% / numItems) */
  text-align: center;
  white-space: nowrap;

  @include media(">=tablet") {
    font-size: rem(44px);
  }
}
</style>
