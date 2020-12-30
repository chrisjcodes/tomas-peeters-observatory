<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "normalize-scss/sass/normalize.scss";
@import "./theme/sizing.scss";
@import "./theme/media.scss";
@import "./theme/typography.scss";
@import "./theme/colors.scss";
html {
  font-size: $baseFontSize;
}

body {
  @include normalize();
  @include robotoLight;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: rem(22px);
  background-color: $black;
  color: $white;
}

#app {
  margin-top: rem(10px);

  @include media(">=tablet") {
    margin-top: rem(40px);
  }
}
</style>
