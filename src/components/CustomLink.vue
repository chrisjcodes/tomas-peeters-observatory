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
    theme: { type: String, default: "ul-white" },
  },
};
</script>

<style lang="scss" scoped>
@import "@/theme/colors.scss";
@import "@/theme/typography.scss";

.base {
  text-decoration: none;
}

%underline {
  content: "";
  position: absolute;
  left: 0;
  bottom: -15px;
  height: 1px;
  width: 100%;
}

.theme-ul-white {
  color: $white;
  position: relative;

  &:after {
    @extend %underline;
    background-color: white;
  }
}

.theme-ul-scorpion {
  color: $scorpion;
  position: relative;

  &:after {
    @extend %underline;
    background-color: $scorpion;
  }
}

nav {
  cursor: pointer;
}
</style>
