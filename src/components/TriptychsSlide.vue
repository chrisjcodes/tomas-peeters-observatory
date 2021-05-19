<template>
  <section>
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
</template>

<script>
export default {
  name: "TriptychsSlide",
  props: {
    triptych: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "@/theme/colors.scss";
@import "@/theme/media.scss";
@import "@/theme/sizing.scss";
@import "@/theme/typography.scss";

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
