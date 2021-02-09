<template>
  <div>
    <div class="background" />
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
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
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

body.gradient-dark .background {
  background-image: linear-gradient(to bottom, $black, $cod-gray);
  background-color: $cod-gray;
}
</style>
