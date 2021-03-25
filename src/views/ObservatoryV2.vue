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
          v-bind="slickSettings"
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
    <section class="writing snap">
      <Container>
        <div class="image-grid">
          <div class="image-grid-image">
            <img src="@/assets/observatories/i/images/thumb.jpeg" />
          </div>
          <div class="image-grid-image">
            <img src="@/assets/observatories/i/images/thumb.jpeg" />
          </div>
          <div class="image-grid-image">
            <img src="@/assets/observatories/i/images/thumb.jpeg" />
          </div>
          <div class="image-grid-image">
            <img src="@/assets/observatories/i/images/thumb.jpeg" />
          </div>
          <div class="image-grid-image">
            <img src="@/assets/observatories/i/images/thumb.jpeg" />
          </div>
          <div class="image-grid-image">
            <img src="@/assets/observatories/i/images/thumb.jpeg" />
          </div>
        </div>
        <div class="long-copy">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            doloribus rerum nobis laborum officiis explicabo, quam excepturi!
            Cum fuga minima accusantium pariatur nesciunt accusamus corporis ea,
            rerum neque cumque similique?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            doloribus rerum nobis laborum officiis explicabo, quam excepturi!
            Cum fuga minima accusantium pariatur nesciunt accusamus corporis ea,
            rerum neque cumque similique?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            doloribus rerum nobis laborum officiis explicabo, quam excepturi!
            Cum fuga minima accusantium pariatur nesciunt accusamus corporis ea,
            rerum neque cumque similique?
          </p>
        </div>
      </Container>
    </section>
  </div>
</template>

<script>
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
    Container,
    SequenceSlide,
    VimeoPlayer,
    VueSlickCarousel,
  },
  data() {
    return {
      panelSnapInstance: null,
      observatory: {},
      slickSettings: {
        arrows: false,
        dots: true,
        dotsClass: "slick-dots custom-dots",
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
.custom-dots {
  display: flex;
  position: relative !important;
  bottom: 55px !important;

  & li button:before {
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

  // &.sequence {
  // }

  &.writing {
    background: $black;
    padding-top: rem(35px);
    padding-bottom: rem(250px);
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

.image-grid {
  display: grid;
  gap: rem(30px);
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: rem(50px);

  &-image {
    border: 1px solid white;
    img {
      max-width: 100%;
    }
  }
}

.long-copy {
  font-size: map-get($font-sizing, "lg");
  letter-spacing: map-get($letter-spacing, "md");
}
</style>
