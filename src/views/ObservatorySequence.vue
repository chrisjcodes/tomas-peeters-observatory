<template>
  <div class="slick-container">
    <VueSlickCarousel v-bind="slickSettings">
      <SlickSlideTemplate
        v-for="slide in sequence"
        :key="slide[1].id"
        :slide="slide[1]"
      />
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import SlickSlideTemplate from "@/components/SlickSlideTemplate";

import * as service from "../services";

export default {
  name: "ObservatorySequence",
  components: {
    VueSlickCarousel,
    SlickSlideTemplate,
  },
  data() {
    const sequence = service.fetchSequenceById(this.$route.params.id);
    return {
      sequence,
      slickSettings: {
        arrows: false,
        dots: true,
        dotsClass: "slick-dots custom-dots",
        infinite: true,
        fade: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    };
  },
};
</script>

<style lang="scss">
@import "@/theme/colors.scss";
@import "@/theme/media.scss";
@import "@/theme/sizing.scss";
@import "@/theme/typography.scss";

.slick-slide * {
  outline: none;
}
.custom-dots {
  display: flex;
  position: absolute;
  bottom: 25vh;
  & li button:before {
    font-size: 8px;
  }
  @include media(">=tablet") {
    bottom: 15vh;
  }
  @include media(">=desktop") {
    bottom: 5vh;
  }
}
</style>
