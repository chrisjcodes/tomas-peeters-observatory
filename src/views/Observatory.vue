<template>
  <Container>
    <header>
      <img :src="this.logoSrc" :alt="`observatory ${observatory.name} logo`" />
    </header>
    <div class="observatory-copy">
      <p>
        {{ observatory.copyTop }}
      </p>
    </div>
    <VideoTemplate :urlId="observatory.videoUrlId || ''" />
    <div class="observatory-copy bottom">
      <p>
        {{ observatory.copyBottom }}
      </p>
    </div>
    <nav>
      <CustomLink
        theme="ul-light-primary"
        :to="`${this.$route.params.name}/sequence`"
        >Explore Further</CustomLink
      >
    </nav>
  </Container>
</template>

<script>
import Container from "@/components/Container";
import CustomLink from "@/components/CustomLink";
import VideoTemplate from "@/components/VideoTemplate";

import { observatoriesService } from "../services";

export default {
  name: "Observatory",
  components: {
    Container,
    CustomLink,
    VideoTemplate,
  },
  data() {
    return {
      observatory: {},
    };
  },
  computed: {
    logoSrc() {
      return this.observatory.logoFileName
        ? require(`@/assets/observatories/${this.$route.params.name}/images/${this.observatory.logoFileName}`)
        : "";
    },
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
  @include primary-cursive;

  font-size: map-get($font-sizing, "sm");
  letter-spacing: map-get($letter-spacing, "md");
  text-align: center;

  @include media(">=tablet") {
    font-size: map-get($font-sizing, "lg");
    letter-spacing: map-get($letter-spacing, "xl");
  }

  @include media(">=desktop") {
    font-size: map-get($font-sizing, "jumbo");
    letter-spacing: map-get($letter-spacing, "xl");
  }
}

nav {
  text-align: center;
  font-size: map-get($font-sizing, "sm");
  letter-spacing: map-get($letter-spacing, "md");
  margin-top: rem(60px);

  @include media(">=tablet") {
    font-size: map-get($font-sizing, "lg");
    letter-spacing: map-get($letter-spacing, "xl");
  }

  @include media(">=desktop") {
    font-size: map-get($font-sizing, "jumbo");
    letter-spacing: map-get($letter-spacing, "xl");
  }
}
</style>
