<template>
  <div class="slick-container">
    <VueSlickCarousel v-bind="slickSettings">
      <SlickSlideTemplate
        v-for="sequence in observatorySequence"
        :key="sequence[1].slide_image"
        :sequence="sequence"
      />
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import SlickSlideTemplate from "@/components/SlickSlideTemplate";
import observatoryData from "../observatoryData";

export default {
  name: "ObservatorySequence",
  components: {
    VueSlickCarousel,
    SlickSlideTemplate,
  },
  data() {
    const findObservatoryIndex = (observatory) =>
      observatory.id === this.$route.params.observatory;
    const observatoriesArray = Object.entries(observatoryData);
    const currentIndex = observatoriesArray.findIndex(findObservatoryIndex);
    const currentObservatory = observatoriesArray[currentIndex];
    const observatorySequence = Object.entries(
      observatoriesArray[currentIndex][1].sequence
    );
    return {
      currentObservatory,
      observatorySequence,
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
