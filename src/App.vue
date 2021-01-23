<template>
  <div id="app">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
export default {
  name: "App",
  components: {
    Navigation,
  },
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
  font-size: $baseFontSize;
}

body {
  @include robotoLight;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: rem(22px);
  background-color: $black;
  color: $white;
}
</style>
