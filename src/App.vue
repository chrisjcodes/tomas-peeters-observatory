<template>
  <div>
    <div id="app">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
@import "normalize-scss/sass/normalize.scss";
@import "./theme/sizing.scss";
@import "./theme/media.scss";
@import "./theme/typography.scss";
@import "./theme/colors.scss";

@include normalize();

html {
  font-size: $base-rem-size;
}

body {
  @include primary-sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-transform: uppercase;
  background-color: $black;
  color: map-get($typeface-colors, "light-primary");
}

html,
body {
  min-height: 100%;
}

// .background {
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background: #fb1;
//   z-index: -9999;
// }

body.scroll-lock {
  overflow: hidden;
}

body.gradient-dark {
  background-image: linear-gradient(
    to bottom,
    hsl(0, 0%, 0%) 0%,
    hsl(0, 0%, 9.9%) 18.6%,
    hsl(0, 0%, 19.38%) 34.7%,
    hsl(0, 0%, 28.43%) 48.4%,
    hsl(0, 0%, 37.03%) 59.9%,
    hsl(0, 0%, 45.18%) 69.5%,
    hsl(0, 0%, 52.85%) 77.2%,
    hsl(0, 0%, 60.02%) 83.4%,
    hsl(0, 0%, 66.66%) 88.2%,
    hsl(0, 0%, 72.77%) 91.9%,
    hsl(0, 0%, 78.3%) 94.5%,
    hsl(0, 0%, 83.22%) 96.4%,
    hsl(0, 0%, 87.5%) 97.7%,
    hsl(0, 0%, 91.09%) 98.6%,
    hsl(0, 0%, 93.94%) 99.3%,
    hsl(0, 0%, 96%) 100%
  );

  background-image: linear-gradient(
    to bottom,
    hsl(0, 0%, 0%) 0%,
    hsl(0, 0%, 1.65%) 18.7%,
    hsl(0, 0%, 4.67%) 34.9%,
    hsl(0, 0%, 8.59%) 48.8%,
    hsl(0, 0%, 13.22%) 60.6%,
    hsl(0, 0%, 18.48%) 70.4%,
    hsl(0, 0%, 24.29%) 78.4%,
    hsl(0, 0%, 30.6%) 84.8%,
    hsl(0, 0%, 37.39%) 89.8%,
    hsl(0, 0%, 44.62%) 93.6%,
    hsl(0, 0%, 52.26%) 96.3%,
    hsl(0, 0%, 60.29%) 98.1%,
    hsl(0, 0%, 68.69%) 99.2%,
    hsl(0, 0%, 77.45%) 99.8%,
    hsl(0, 0%, 86.56%) 100%,
    hsl(0, 0%, 96%) 100%
  );
  color: $scorpion;
}

body.emperor {
  background-color: $emperor;
  color: rgba(0, 0, 0, 0.5);
}
</style>
