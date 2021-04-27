<template>
  <div>
    <VueSlickCarousel v-bind="slickSettings">
      <!-- <div
        :style="{
          height: '891px',
        }"
      >
        <div class="intro">
          <p>WHEN SPACE COLLAPSES<FancyBreak />SEE WITHOUT LOOKING</p>
        </div>
      </div> -->
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
          <p>{{ triptych.copy }}</p>
        </div>
      </section>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
// import FancyBreak from "../components/FancyBreak.vue";

export default {
  components: {
    VueSlickCarousel,
    // FancyBreak,
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
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
    font-size: map-get($font-sizing, "lg2");
    letter-spacing: map-get($letter-spacing, "lg");
  }
}

section {
  padding-top: 20vh;

  @include media(">=desktop") {
    padding-top: rem(80px);
  }
}

header {
  display: flex;
  justify-content: center;
  margin-bottom: rem(45px);

  img {
    width: 85%;
  }

  @include media(">=tablet") {
    img {
      width: 55%;
    }
  }

  @include media(">=desktop") {
    img {
      width: 35%;
    }
  }
}

.panel-container {
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  grid-gap: 2px;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: rem(40px);

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
  }
}

.copy-container {
  p {
    @include primary-sans-serif;
    text-align: center;
    color: rgba($white, 0.55);
    font-size: map-get($font-sizing, "md");
    letter-spacing: map-get($letter-spacing, "sm");

    @include media(">=tablet") {
      font-size: map-get($font-sizing, "lg2");
      letter-spacing: map-get($letter-spacing, "lg");
    }
  }
}
</style>
