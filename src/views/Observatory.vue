<template>
  <Container>
    <header>
      <img :src="getImgPath(`${observatory.logoFileName}`)" alt="#" />
    </header>
    <div class="observatory-copy">
      <div class="text-top">
        <p>
          <GradientText>
            {{ observatory.copyTextTop }}
          </GradientText>
        </p>
      </div>
    </div>
    <VideoTemplate :url_id="`${observatory.videoUrlId}`" />
    <div class="observatory-copy">
      <p>
        <GradientText>
          {{ observatory.copyLineBottom }}
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

import * as service from "../services";

export default {
  name: "Observatory",
  components: {
    Container,
    CustomLink,
    GradientText,
    VideoTemplate,
  },
  data() {
    const observatory = service.fetchById(this.$route.params.observatory);
    return {
      observatory,
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
    line-height: rem(30px);

    @include media(">=tablet") {
      line-height: rem(40px);
    }
  }
}
nav {
  @include largeBody;
  margin-top: rem(80px);
}

.text-top {
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  @include media(">=tablet") {
    width: 85%;
  }
}
</style>
