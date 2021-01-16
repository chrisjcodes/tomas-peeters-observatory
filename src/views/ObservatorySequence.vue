<template>
  <div class="slick-container">
    <VueSlickCarousel v-bind="slickSettings">
      <div>
        <div class="slide-inner slide-light">
          <div class="copy">
            <p>
              in observatory i sunlight is radiating on an empty tunnel
            </p>
            <p>
              projecting a ring of light
            </p>
          </div>
          <div class="image">
            <img src="@/assets/observatories/i/images/sequence/a.jpg" />
          </div>
        </div>
      </div>
      <div>
        <div class="slide-inner slide-dark">
          <div class="copy">
            <p>
              this luminous ring ocilates between my face
            </p>
            <p>
              and the face on the other end of the tunnel
            </p>
          </div>
          <div class="image">
            <img src="@/assets/observatories/i/images/sequence/b.jpg" />
          </div>
        </div>
      </div>
      <div>
        <div class="slide-inner slide-light">
          <div class="copy">
            <p>
              within this radiant ring i see the emptiness of space
            </p>
            <p>
              flowing through my face
            </p>
          </div>
          <div class="image">
            <img src="@/assets/observatories/i/images/sequence/c.jpg" />
          </div>
        </div>
      </div>
      <div>
        <div class="slide-inner slide-dark">
          <div class="copy">
            <p>
              suddenly i see that my end of the tunnel
            </p>
            <p>
              is utterly empty of my face
            </p>
          </div>
          <div class="image">
            <img src="@/assets/observatories/i/images/sequence/d.jpg" />
          </div>
        </div>
      </div>
      <div>
        <div class="slide-inner slide-light">
          <div class="copy">
            <p>
              here at zero distance i am seeing
            </p>
            <p>
              the empty space i am looking out from
            </p>
          </div>
          <div class="image">
            <img src="@/assets/observatories/i/images/sequence/e.jpg" />
          </div>
        </div>
      </div>
      <div>
        <div class="slide-inner slide-dark">
          <div class="copy">
            <p>
              being empty
            </p>
            <p>
              is my direct experience of myself
            </p>
          </div>
          <div class="image">
            <img src="@/assets/observatories/i/images/sequence/f.jpg" />
          </div>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "ObservatorySequence",
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
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

.slide-inner {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $silver;

  .copy {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 20vh;
    max-width: 95vw;

    @include media(">=tablet") {
      max-width: 85vw;
    }
  }

  p {
    font-size: rem(16px);
    text-transform: uppercase;
    text-align: center;
    margin-top: 0;
    margin-bottom: 15px;
    letter-spacing: rem(2px);
    line-height: 1.5;
    color: $scorpion;

    @include media(">=tablet") {
      font-size: rem(18px);
      letter-spacing: rem(5px);
    }

    @include media(">=desktop") {
      font-size: rem(22px);
      letter-spacing: rem(8px);
    }
  }

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;

    img {
      max-width: 90vw;
      max-height: 40vh;
      box-shadow: rgba(0, 0, 0, 0.349) 0px 0px 45px;
    }

    @include media(">=tablet") {
      height: 60vh;

      img {
        max-height: 50vh;
      }
    }

    @include media(">=desktop") {
      height: 70vh;

      img {
        max-height: 65vh;
      }
    }
  }
}
</style>
