<template>
  <span :class="['gradient-text-base', $props.theme]">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "GradientText",
  props: {
    theme: {
      type: String,
      default: "gray-to-white",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/theme/colors.scss";

.gradient-text-base {
  background-color: white;
  background-size: 100%;
  background-repeat: repeat;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
}

.gray-to-white {
  background-color: white;
  background-image: linear-gradient(to top, $silver, $cod-gray);
}

.yellow-to-gold {
  background-color: rgb(153, 114, 6);
  background-image: linear-gradient(
    to bottom,
    rgb(233, 193, 63) 0%,
    rgb(212, 175, 55) 50%,
    rgb(92, 76, 22) 100%
  );
}
</style>
