<template>
  <Container>
    <header>
      <img
        :src="
          getImgPath(`${observatoriesArray[currentIndex][1].logo_filename}`)
        "
        alt="#"
      />
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
    <VideoTemplate
      :url_id="`${observatoriesArray[currentIndex][1].video_url_id}`"
    />
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
    <nav>
      <CustomLink to="i/sequence">Explore Further</CustomLink>
    </nav>
  </Container>
</template>

<script>
import Container from "@/components/Container";
import GradientText from "@/components/GradientText";
import CustomLink from "@/components/CustomLink";
import VideoTemplate from "@/components/VideoTemplate";
import observatoryData from "../observatoryData";

export default {
  name: "Observatory",
  components: {
    Container,
    CustomLink,
    GradientText,
    VideoTemplate,
  },
  data() {
    const findObservatoryIndex = (observatory) =>
      observatory[0] === this.$route.params.observatory;
    const observatoriesArray = Object.entries(observatoryData);
    const currentIndex = observatoriesArray.findIndex(findObservatoryIndex);
    return {
      observatoriesArray,
      currentIndex,
    };
  },
  methods: {
    getImgPath(imgName) {
      return imgName
        ? require(`@/assets/observatories/${this.$route.params.observatory}/images/${imgName}`)
        : "";
    },
    getVideoUrl(url_id) {
      return url_id ? require(`${url_id}`) : "";
    },
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

nav {
  @include largeBody;
  margin-top: rem(80px);
}
</style>
