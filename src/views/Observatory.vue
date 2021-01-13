<template>
  <Container>
    <header>
      <img src="@/assets/observatories/i/images/logo.svg" />
    </header>
    <div class="observatory-copy">
      <p>
        <GradientText>
          The Art Of Using Form
        </GradientText>
      </p>
      <p>
        <GradientText>
          To See Emptiness
        </GradientText>
      </p>
    </div>
    <div class="video-loop">
      <video src="@/assets/observatories/i/videos/intro.mp4" controls />
    </div>
    <div class="observatory-copy">
      <p>
        <GradientText>
          at zero distance from my center
        </GradientText>
      </p>
      <p>
        <GradientText>
          my face is completely transparent
        </GradientText>
      </p>
    </div>
    <!-- video is injected into this div
    <div id="video-container"></div>
    -->
    <nav>
      <CustomLink to="i/sequence">Explore Further</CustomLink>
    </nav>
  </Container>
</template>

<script>
import Container from "@/components/Container";
import GradientText from "@/components/GradientText";
import CustomLink from "../components/CustomLink";
// import Player from "@vimeo/player";

export default {
  name: "Observatory",
  components: {
    Container,
    CustomLink,
    GradientText,
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
  margin-bottom: rem(120px);

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

.observatory-copy {
  @include papyrus;

  font-size: rem(16px);
  text-transform: uppercase;
  letter-spacing: rem(4px);
  text-align: center;

  @include media(">=tablet") {
    font-size: rem(30px);
    letter-spacing: rem(8px);
  }
  p {
    color: $silver;
  }
}

.video-loop {
  display: flex;
  justify-content: center;
  margin-top: rem(80px);
  margin-bottom: rem(80px);

  video {
    max-width: 100%;
    height: auto;
  }
}

nav {
  @include largeBody;
  margin-top: rem(80px);
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
</style>
