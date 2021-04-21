<template>
  <div>
    <VueSlickCarousel v-bind="slickSettings">
      <section v-for="triptych in triptychs" :key="triptych.name">
        <header>
          <img
            draggable="false"
            :src="require(`@/assets/triptychs/${triptych.name}/logo.svg`)"
          />
        </header>
        <div class="panel-container">
          <div class="panel-item">
            <img
              draggable="false"
              :src="require(`@/assets/triptychs/${triptych.name}/a.jpg`)"
            />
          </div>
          <div class="panel-item">
            <img
              draggable="false"
              :src="require(`@/assets/triptychs/${triptych.name}/b.jpg`)"
            />
          </div>
          <div class="panel-item">
            <img
              draggable="false"
              :src="require(`@/assets/triptychs/${triptych.name}/c.jpg`)"
            />
          </div>
        </div>
        <div class="copy-container">
          <p>What you are looking for is your single eye</p>
        </div>
      </section>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: {
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
          copy: "WHAT YOU ARE LOOKING FOR IS YOUR SINGLE EYE",
        },
        {
          name: "ii",
          copy: "WHAT YOU ARE LOOKING FOR IS YOUR SINGLE EYE",
        },
        {
          name: "iii",
          copy: "WHAT YOU ARE LOOKING FOR IS YOUR SINGLE EYE",
        },
        {
          name: "iv",
          copy: "WHAT YOU ARE LOOKING FOR IS YOUR SINGLE EYE",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.slick-slide * {
  outline: none;
}

.triptych-dots {
  display: flex;
  position: absolute !important;
  bottom: -30px;

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
  padding-top: rem(50px);
}

header {
  display: flex;
  justify-content: center;
  margin-bottom: rem(45px);

  img {
    height: 100%;
    width: 35%;
  }
}

.panel-container {
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  grid-gap: 25px;
  margin-left: 10vw;
  margin-right: 10vw;
  margin-bottom: rem(40px);
}

.panel-item {
  grid-column: auto;

  img {
    height: 100%;
    width: 100%;
  }
}

.copy-container {
  p {
    @include primary-sans-serif;
    text-align: center;
    color: rgba($white, 0.55);

    font-size: map-get($font-sizing, "lg2");
    letter-spacing: map-get($letter-spacing, "lg");
  }
}
</style>
