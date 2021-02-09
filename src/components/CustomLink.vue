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
    theme: { type: String, default: "ul-light-primary" },
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
  transition: transform 500ms ease;
  transform: scaleX(0.5);
}

%underline-hover {
  transform: scaleX(1);
}

.theme-ul-light-primary {
  color: map-get($typeface-colors, "light-primary");
  position: relative;

  &:after {
    @extend %underline;
    background-color: map-get($typeface-colors, "light-primary");
  }

  &:hover {
    &:after {
      @extend %underline-hover;
    }
  }
}

.theme-ul-dark-primary {
  color: map-get($typeface-colors, "dark-primary");
  position: relative;

  &:after {
    @extend %underline;
    background-color: map-get($typeface-colors, "dark-primary");
  }

  &:hover {
    &:after {
      @extend %underline-hover;
    }
  }
}
</style>
