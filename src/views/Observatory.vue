<template>
  <Container>
    <header>
      <img :src="getImgPath(observatory.logoFileName)" alt="#" />
    </header>
    <div class="observatory-copy">
      <div class="text-top">
        <p>
          <GradientText>
            {{ observatory.copyTop }}
          </GradientText>
        </p>
      </div>
    </div>
    <VideoTemplate :urlId="`${observatory.videoUrlId}`" />
    <div class="observatory-copy">
      <p>
        <GradientText>
          {{ observatory.copyBottom }}
        </GradientText>
      </p>
    </div>
    <nav>
      <CustomLink
        theme="ul-scorpion"
        :to="`${this.$route.params.name}/sequence`"
        >Explore Further</CustomLink
      >
    </nav>
  </Container>
</template>

<script>
import Container from "@/components/Container";
import GradientText from "@/components/GradientText";
import CustomLink from "@/components/CustomLink";
import VideoTemplate from "@/components/VideoTemplate";

import { observatoriesService } from "../services";

export default {
  name: "Observatory",
  components: {
    Container,
    CustomLink,
    GradientText,
    VideoTemplate,
  },
  data() {
    return {
      observatory: {},
    };
  },
  created() {
    this.fetchObservatoryById();
  },
  watch: {
    $route: "fetchObservatoryById",
  },
  methods: {
    fetchObservatoryById() {
      observatoriesService
        .fetchByName(this.$route.params.name)
        .then((observatory) => {
          this.observatory = observatory;
        });
    },
    getImgPath(imgName) {
      return imgName
        ? require(`@/assets/observatories/${this.$route.params.name}/images/${imgName}`)
        : "";
    },
    getVideoUrl(urlId) {
      return urlId ? require(urlId) : "";
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
