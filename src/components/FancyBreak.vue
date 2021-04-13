<template>
  <br class="break" />
</template>

<style lang="scss" scoped>
@import "@/theme/media.scss";
.break {
  display: none;

  @include media(">=tablet") {
    display: block;
  }
}
</style>
