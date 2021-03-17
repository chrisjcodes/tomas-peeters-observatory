<template>
  <div class="root">
    <div class="background" />
    <Container containOn="x">
      <h1 class="title top">Biography</h1>
    </Container>
    <div
      class="main-image"
      :style="{
        'background-image':
          'url(' + require('@/assets/writing-pages/bio/main.jpg') + ')',
      }"
    />
    <Container containOn="x">
      <h1 class="title bottom">Tomas Peeters</h1>
    </Container>
    <Container containOn="x">
      <div class="copy-container">
        <p class="body-copy">
          Tomas Peeters grew up in Antwerp, Belgium in the 1960s with a sense
          that there was something fundamentally incomplete about being in the
          world. He began creating physical objects to see what the empty space
          at zero distance from himself looks like. Along his quest, he
          graduated with a Bachelor of Arts in Sculpture from Sint-Lucas School
          of Art in Brussels, and then with a Master of Fine Arts from
          California State University, Northridge. In 2003, Tomas established
          Lumina Pura, his art and research studio in Los Angeles where he works
          with a small staff developing his life’s work: the Observatories.
          These sculptures are instruments built to look for the clear emptiness
          he is looking out from. After decades of searching, he came to the
          startling recognition that what he was looking for is simply that
          which is seeing! Tomas invites people into these space-collapsing
          sculptures, to have an unmediated seeing of this boundless emptiness
          they are looking out from. No longer is there something missing—there
          is simply this turbulent world!
        </p>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from "@/components/Container";
export default {
  components: {
    Container,
  },
  data() {
    return {
      source: `
          # Hello

          I'm a paragraph
          `,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/theme/colors.scss";
@import "@/theme/media.scss";
@import "@/theme/sizing.scss";
@import "@/theme/typography.scss";

.background {
  min-height: 100%;
  position: fixed;
  z-index: -9999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: $alto;
}

.root {
  margin-top: rem(70px);
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
    }
  }

  @include media(">=tablet") {
    font-size: map-get($font-sizing, "jumbo");
    letter-spacing: map-get($letter-spacing, "jumbo");
  }
}

.main-image {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: rem(100px);
  width: 100vw;

  @include media(">=tablet") {
    height: rem(230px);
  }

  @include media(">=desktop") {
    height: rem(300px);
  }

  @include media(">=1350px") {
    height: rem(450px);
  }
}

.copy-container {
  display: flex;
  justify-content: center;
  margin-bottom: rem(20px);
}

.body-copy {
  font-size: map-get($font-sizing, "lg");
  text-transform: none;
  color: $black;
  line-height: 1.75;
  text-align: justify;
}
</style>
