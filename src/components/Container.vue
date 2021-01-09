<template>
  <div class="container">
    <header>
      <img src="@/assets/landing/images/logo.svg" />
    </header>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Container",
  props: ["headerLogo"],
};
</script>

<style lang="scss" scoped>
@import "@/theme/colors.scss";
@import "@/theme/media.scss";
@import "@/theme/sizing.scss";
@import "@/theme/typography.scss";

.container {
  margin-top: rem(45px);
  margin-right: rem(25px);
  margin-left: rem(25px);
  margin-bottom: rem(45px);

  @include media(">desktop") {
    max-width: rem(1200px);
    margin-right: auto;
    margin-left: auto;
  }
}

header {
  display: flex;
  justify-content: center;
  margin-bottom: rem(65px);

  img {
    height: 100%;
    width: 100%;
  }

  @include media(">=tablet") {
    img {
      width: 80%;
    }
  }

  @include media(">=desktop") {
    img {
      width: 60%;
    }
  }
}
</style>
