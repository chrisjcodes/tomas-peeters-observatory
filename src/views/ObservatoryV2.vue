<template>
  <div class="root">
    <section class="intro">
      <div class="gradient" />
      <Container containsOn="x">
        <header>
          <img
            :src="this.logoSrc"
            :alt="`observatory ${observatory.name} logo`"
          />
        </header>
        <div class="observatory-copy">
          <p>
            {{ observatory.copyTop }}
          </p>
        </div>
        <VimeoPlayer :videoId="observatory.videoUrlId || ''" />
      </Container>
    </section>
    <section class="sequence snap">
      <div class="slick-container">
        <VueSlickCarousel
          v-if="observatory.sequence && observatory.sequence.length > 0"
          v-bind="sequenceSettings"
        >
          <SequenceSlide
            v-for="slide in observatory.sequence"
            :key="slide.id"
            :name="$route.params.name"
            :slide="slide"
          />
        </VueSlickCarousel>
      </div>
    </section>
    <section class="making snap">
      <div :style="{ width: '100vw' }">
        <VueSlickCarousel v-bind="makingSettings">
          <div class="making-slide">
            <h1 class="making-title top">The Making Of</h1>
            <div class="making-slide-inner">
              <img src="@/assets/observatories/i/images/making/4.jpeg" />
            </div>
            <!-- <h1 class="making-title bottom">Observatory I</h1> -->
          </div>
          <div class="making-slide">
            <div class="making-slide-inner">
              <img src="@/assets/observatories/i/images/making/2.jpeg" />
            </div>
          </div>
          <div class="making-slide">
            <div class="making-slide-inner">
              <img src="@/assets/observatories/i/images/making/3.jpeg" />
            </div>
          </div>
          <div class="making-slide">
            <div class="making-slide-inner">
              <img src="@/assets/observatories/i/images/making/1.jpeg" />
            </div>
          </div>
          <div class="making-slide">
            <div class="making-slide-inner">
              <img src="@/assets/observatories/i/images/making/5.jpeg" />
            </div>
          </div>
          <div class="making-slide">
            <div class="making-slide-inner">
              <img src="@/assets/observatories/i/images/making/6.jpeg" />
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </section>
    <section class="writing snap">
      <div
        class="main-image"
        :style="{
          'background-image':
            'url(' + require('@/assets/writing-pages/bio/main.jpg') + ')',
        }"
      />
      <Container containOn="x">
        <div class="long-copy-container">
          <div class="long-copy-inner">
            <h1 class="long-copy-title">Explored</h1>
            <div class="long-copy">
              <p>
                Observatory I turns around the arrow of attention<FancyBreak />
                from what you are looking at to where you are seeing from.
              </p>
              <p>
                This Observatory allows you to see that at zero distance from
                yourself, you are<FancyBreak />
                utterly empty.
              </p>
              <p>
                When all distance collapses, you are no longer appearing in your
                experience—and<FancyBreak />
                yet, you are here.
              </p>
              <p>
                Only seeing is present, and seeing is empty.<FancyBreak />
                You are this empty seeing.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  </div>
</template>

<script>
import FancyBreak from "@/components/FancyBreak";
import Container from "@/components/Container";
import SequenceSlide from "@/components/SequenceSlide";
import VimeoPlayer from "@/components/VimeoPlayer";
import VueSlickCarousel from "vue-slick-carousel";
import PanelSnap from "panelsnap";

import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

import { observatoriesService } from "../services";

export default {
  name: "Observatory",
  components: {
    FancyBreak,
    Container,
    SequenceSlide,
    VimeoPlayer,
    VueSlickCarousel,
  },
  data() {
    return {
      panelSnapInstance: null,
      observatory: {},
      sequenceSettings: {
        arrows: false,
        dots: true,
        dotsClass: "slick-dots sequence-dots",
        infinite: true,
        fade: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      makingSettings: {
        arrows: false,
        dots: true,
        dotsClass: "slick-dots making-dots",
        infinite: true,
        fade: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
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
  mounted() {
    this.panelSnapInstance = new PanelSnap({
      panelSelector: ".root > section",
      duration: 1500,
    });
  },
  beforeDestroy() {
    this.panelSnapInstance.destroy();
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

<style lang="scss">
.slick-slide * {
  outline: none;
}
.sequence-dots {
  display: flex;
  position: relative !important;
  bottom: 55px !important;

  & li button:before {
    font-size: 8px;
  }
}

.making-dots {
  display: flex;
  position: absolute !important;
  bottom: -10vh !important;
  bottom: -8vh !important;

  & li.slick-active button:before {
    opacity: 0.55;
    color: white;
  }

  & li button:before {
    opacity: 0.15;
    color: white;
    font-size: 8px;
  }
}
</style>

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

section {
  height: 100vh;

  &.intro {
    padding-top: rem(30px);
    background-image: linear-gradient(
      to bottom,
      hsl(0, 0%, 0%) 0%,
      hsl(0, 0%, 1.17%) 14.8%,
      hsl(0, 0%, 3.93%) 27.9%,
      hsl(0, 0%, 8.04%) 39.2%,
      hsl(0, 0%, 13.25%) 49%,
      hsl(0, 0%, 19.31%) 57.5%,
      hsl(0, 0%, 25.97%) 64.7%,
      hsl(0, 0%, 32.98%) 70.9%,
      hsl(0, 0%, 40.1%) 76.1%,
      hsl(0, 0%, 47.07%) 80.6%,
      hsl(0, 0%, 53.65%) 84.5%,
      hsl(0, 0%, 59.6%) 87.9%,
      hsl(0, 0%, 64.65%) 91%,
      hsl(0, 0%, 68.57%) 94%,
      hsl(0, 0%, 71.1%) 96.9%,
      hsl(0, 0%, 72%) 100%
    );
  }

  &.sequence {
    margin-top: -1px;
    background: #b8b8b8;
  }

  &.making {
    background: $black;
    display: flex;
    align-items: center;
  }

  &.writing {
    color: black;
    background: hsl(0, 0%, 72%) 100%;
    padding-bottom: rem(250px);
  }
}

.making-slide {
  &-inner {
    display: flex;
    justify-content: center;

    img {
      object-fit: contain;
      height: 40vh;
      width: 100vw;

      @include media(">=tablet") {
        height: 50vh;
      }

      @include media(">=desktop") {
        height: 60vh;
      }
    }
  }
}

.making-title {
  margin: 0;
  padding: 0;
  text-align: center;
  font-weight: 100;
  font-size: map-get($font-sizing, "lg");
  letter-spacing: map-get($letter-spacing, "lg");

  &.top {
    margin-bottom: rem(20px);
  }
  &.bottom {
    margin-top: rem(20px);
  }

  @include media(">=tablet") {
    font-size: map-get($font-sizing, "jumbo");
    letter-spacing: map-get($letter-spacing, "jumbo");
  }

  // @include media(">=desktop") {
  // }
}

.main-image {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: rem(160px);
  width: 100vw;

  @include media(">=tablet") {
    height: rem(230px);
  }

  @include media(">=desktop") {
    height: rem(300px);
  }

  @include media(">=1350px") {
    height: rem(450px);
  }
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

.slick-container {
  position: relative;
}

.long-copy-container {
  display: flex;
  justify-content: center;
}

.long-copy-inner {
  margin-top: rem(30px);
}

.long-copy-title {
  margin: 0;
  padding: 0;
  text-align: center;
  font-weight: 300;
  font-size: map-get($font-sizing, "lg");
  letter-spacing: map-get($letter-spacing, "lg");

  @include media(">=tablet") {
    font-size: map-get($font-sizing, "jumbo");
    letter-spacing: map-get($letter-spacing, "jumbo");
  }
}

.long-copy {
  font-size: map-get($font-sizing, "lg");
  text-transform: none;
  color: $black;
  line-height: 1.75;
  text-align: justify;
}
</style>
