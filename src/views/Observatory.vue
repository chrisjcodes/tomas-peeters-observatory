<template>
  <Container>
    <div class="gradient" />
    <header>
      <img :src="this.logoSrc" :alt="`observatory ${observatory.name} logo`" />
    </header>
    <div class="observatory-copy">
      <p>
        {{ observatory.copyTop }}
      </p>
    </div>
    <VimeoPlayer :videoId="observatory.videoUrlId || ''" />
    <div class="observatory-copy bottom">
      <p>
        {{ observatory.copyBottom }}
      </p>
    </div>
    <nav>
      <CustomLink
        theme="ul-light-primary"
        :to="`${this.$route.params.name}/sequence`"
        ><img src="@/assets/chevron-down.svg"
      /></CustomLink>
    </nav>
  </Container>
</template>

<script>
import Container from "@/components/Container";
import CustomLink from "@/components/CustomLink";
import VimeoPlayer from "@/components/VimeoPlayer";

import { observatoriesService } from "../services";

export default {
  name: "Observatory",
  components: {
    Container,
    CustomLink,
    VimeoPlayer,
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

.gradient {
  min-height: 100%;
  position: fixed;
  z-index: -9999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(
    to bottom,
    hsl(0, 0%, 0%) 0%,
    hsl(0, 0%, 1.65%) 18.7%,
    hsl(0, 0%, 4.67%) 34.9%,
    hsl(0, 0%, 8.59%) 48.8%,
    hsl(0, 0%, 13.22%) 60.6%,
    hsl(0, 0%, 18.48%) 70.4%,
    hsl(0, 0%, 24.29%) 78.4%,
    hsl(0, 0%, 30.6%) 84.8%,
    hsl(0, 0%, 37.39%) 89.8%,
    hsl(0, 0%, 44.62%) 93.6%,
    hsl(0, 0%, 52.26%) 96.3%,
    hsl(0, 0%, 60.29%) 98.1%,
    hsl(0, 0%, 68.69%) 99.2%,
    hsl(0, 0%, 77.45%) 99.8%,
    hsl(0, 0%, 86.56%) 100%,
    hsl(0, 0%, 96%) 100%
  );
}

.observatory-copy {
  @include primary-cursive;
  color: rgba($white, 0.55);

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
