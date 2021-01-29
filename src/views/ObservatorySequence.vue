<template>
  <div class="slick-container">
    <VueSlickCarousel v-if="sequence.length > 0" v-bind="slickSettings">
      <SequenceSlide
        v-for="slide in sequence"
        :key="slide.id"
        :name="$route.params.name"
        :slide="slide"
      />
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import SequenceSlide from "@/components/SequenceSlide";

import { observatoriesService } from "../services";

export default {
  name: "ObservatorySequence",
  components: {
    VueSlickCarousel,
    SequenceSlide,
  },
  data() {
    return {
      sequence: [],
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
  created() {
    this.fetchSequenceById();
  },
  watch: {
    $route: "fetchSequenceById",
  },
  methods: {
    fetchSequenceById() {
      observatoriesService
        .fetchByName(this.$route.params.name)
        .then(({ sequence }) => {
          this.sequence = sequence;
        });
    },
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
