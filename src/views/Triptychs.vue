<template>
  <div>
    <section class="intro">
      <VueSlickCarousel v-bind="slickSettings">
        <TriptychsSlide
          v-for="triptych in triptychs"
          :triptych="triptych"
          :key="triptych.name"
        />
      </VueSlickCarousel>
    </section>
    <section class="writing">
      <div class="root">
        <div class="background" />
        <Container containOn="x">
          <h1 class="title top">Transparent</h1>
        </Container>
        <div class="main-image">
          <div class="panel-container">
            <div class="panel-item">
              <img
                draggable="false"
                :src="require(`@/assets/triptychs/writing/a.jpg`)"
              />
            </div>
            <div class="panel-item">
              <img
                draggable="false"
                :src="require(`@/assets/triptychs/writing/b.jpg`)"
              />
            </div>
            <div class="panel-item">
              <img
                draggable="false"
                :src="require(`@/assets/triptychs/writing/c.jpg`)"
              />
            </div>
          </div>
        </div>
        <Container containOn="x">
          <h1 class="title bottom">Illuminations</h1>
        </Container>
        <Container containOn="x">
          <div class="copy-container">
            <div class="body-copy">
              <p>
                THE TRIPTYCHS CAPTURE THE COLLAPSE OF SPACE<FancyBreak />
                AS I LOOK THROUGH THE OBSERVATORIES
              </p>
              <p>
                WHEN I NO LONGER LOOK FROM INSIDE A SKULL<FancyBreak />
                THE WORLD IS SEEN AS LUMINOUS
              </p>
              <p>
                THESE IMAGES REVEAL WHAT THE WORLD LOOKS LIKE<FancyBreak />
                AT ZERO DISTANCE FROM MY TRANSPARENT EYE
              </p>
            </div>
          </div>
        </Container>
      </div>
    </section>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import Container from "../components/Container.vue";
import TriptychsSlide from "../components/TriptychsSlide.vue";
import FancyBreak from "../components/FancyBreak.vue";

export default {
  components: {
    Container,
    FancyBreak,
    TriptychsSlide,
    VueSlickCarousel,
  },
  data() {
    return {
      slickSettings: {
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
        dotsClass: "slick-dots triptych-dots",
        infinite: true,
        fade: true,
        speed: 5000,
        cssEase: "ease-in-out",
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      triptychs: [
        {
          name: "i",
          copy: "I LOOK FOR MY INFINITE EYE",
        },
        {
          name: "ii",
          copy: "I CAN NOT SEE MY INFINITE EYE",
        },
        {
          name: "iii",
          copy: "I AM THIS INFINITE EYE",
        },
        {
          name: "iv",
          copy: "I LOOK FOR MY EMPTY EYE",
        },
        {
          name: "v",
          copy: "I CAN NOT SEE MY EMPTY EYE",
        },
        {
          name: "vi",
          copy: "MY EMPTY EYE IS THIS WORLD",
        },
        {
          name: "vii",
          copy: "I LOOK FOR MY ABSENT EYE",
        },
        {
          name: "viii",
          copy: "I CAN NOT SEE MY ABSENT EYE",
        },
        {
          name: "ix",
          copy: "I AM THIS ABSENT EYE",
        },
        {
          name: "x",
          copy: "I LOOK FOR THIS BOUNDLESS WORLD",
        },
        {
          name: "xi",
          copy: "I CAN NOT SEE THIS BOUNDLESS WORLD",
        },
        {
          name: "xii",
          copy: "MY INFINITE EYE IS THIS BOUNDLESS WORLD",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/theme/media.scss";

.slick-slide * {
  outline: none;
}

.triptych-dots {
  display: flex;
  position: absolute !important;
  bottom: -30px;

  & li {
    margin: 0 1px;
    @include media(">=tablet") {
      margin: 0 5px;
    }
  }

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

section {
  &.intro {
    height: 100vh;
  }

  &.writing {
    padding-top: 10px;
    padding-bottom: 50px;
    min-height: 100vh;
    color: black;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 0%,
      rgb(119, 119, 119) 70%
    );

    @include media(">=tablet") {
      padding-top: 50px;
    }
  }
}

.panel-container {
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  grid-gap: 2px;
  margin-left: 0;
  margin-right: 0;

  @include media(">=tablet") {
    grid-gap: 25px;
    margin-left: 10vw;
    margin-right: 10vw;
  }
}

.panel-item {
  grid-column: auto;

  img {
    height: 100%;
    width: 100%;
    border: black 3px solid;
    box-sizing: border-box;

    @include media(">=tablet") {
      border: black 10px solid;
    }
  }
}

.root {
  margin-top: rem(40px);
  color: rgba(0, 0, 0, 1);
}

.title {
  text-align: center;
  font-weight: 300;
  font-size: map-get($font-sizing, "xl");
  letter-spacing: map-get($letter-spacing, "xl");

  &.top {
    @include media(">=tablet") {
      margin-bottom: rem(30px);
    }
  }

  &.bottom {
    @include media(">=tablet") {
      margin-top: rem(30px);
      margin-bottom: rem(30px);
    }
  }

  @include media(">=tablet") {
    font-size: map-get($font-sizing, "jumbo2");
    letter-spacing: map-get($letter-spacing, "jumbo");
  }
}

.copy-container {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: rem(20px);
}

.body-copy {
  font-size: map-get($font-sizing, "lg");
  text-transform: none;
  color: $black;
  line-height: 1.75;
  text-align: center;
  text-transform: uppercase;

  @include media(">=tablet") {
    letter-spacing: map-get($letter-spacing, "md");
  }

  p:first-child {
    margin-top: 0 !important;
    padding-top: 0 !important;
  }

  @include media(">=desktop") {
    width: 90%;
  }
}
</style>
