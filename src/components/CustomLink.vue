<template>
  <router-link :class="['base', `theme-${$props.theme}`]" :to="$props.to">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: "CustomLink",
  props: {
    to: { type: String, default: "" },
    theme: { type: String, default: "underlined-white" },
  },
};
</script>

<style lang="scss" scoped>
@import "@/theme/colors.scss";
@import "@/theme/typography.scss";

.base {
  text-decoration: none;
  z-index: -1;
}

.theme-underlined-white {
  color: $white;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    background: white;
    left: 0;
    bottom: -15px;
    height: 1px;
    width: 100%;
  }
}

nav {
  cursor: pointer;
}
</style>
