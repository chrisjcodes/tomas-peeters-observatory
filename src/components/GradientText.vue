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
  background-image: linear-gradient(
    to bottom,
    rgb(50, 50, 50) 0%,
    rgb(90, 90, 90) 50%,
    rgb(200, 200, 200) 100%
  );
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
