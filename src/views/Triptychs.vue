<template>
  <div>
    <VueSlickCarousel v-bind="slickSettings">
      <div>
        <div class="intro">
          <p>WHEN SPACE COLLAPSES<FancyBreak /> SEE WITHOUT LOOKING</p>
        </div>
      </div>
      <TriptychsSlide
        v-for="triptych in triptychs"
        :triptych="triptych"
        :key="triptych.name"
      />
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import TriptychsSlide from "../components/TriptychsSlide.vue";
import FancyBreak from "../components/FancyBreak.vue";

export default {
  components: {
    VueSlickCarousel,
    TriptychsSlide,
    FancyBreak,
  },
  data() {
    return {
      slickSettings: {
        autoplay: false,
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

.intro {
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  position: absolute;
  width: 100%;

  p {
    text-align: center;
    font-size: map-get($font-sizing, "lg2");
    letter-spacing: map-get($letter-spacing, "lg");
  }
}
</style>
