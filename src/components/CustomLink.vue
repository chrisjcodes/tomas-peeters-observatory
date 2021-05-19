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

@keyframes pulseOpacity {
  0% {
    opacity: 0.25;
  }
  50% {
    opacity: 0.65;
  }
  100% {
    opacity: 0.25;
  }
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

.theme-ul-light-primary-pulse {
  color: map-get($typeface-colors, "light-primary");
  position: relative;

  &:after {
    @extend %underline;
    animation: pulseOpacity 3000ms ease;
    animation-iteration-count: infinite;
    background-color: map-get($typeface-colors, "light-primary");
    opacity: 0.25;
  }

  &:hover {
    &:after {
      @extend %underline-hover;
    }
  }
}

.theme-ul-light-primary {
  color: map-get($typeface-colors, "light-primary");
  position: relative;

  &:after {
    @extend %underline;
    background-color: map-get($typeface-colors, "light-primary");
    opacity: 0.25;
  }

  &:hover {
    &:after {
      @extend %underline-hover;
    }
  }
}

.theme-spotlight-light-primary {
  color: map-get($typeface-colors, "light-primary");
  transition: opacity 0.65s ease-in-out;
  opacity: 0.5;

  &:hover {
    opacity: 1;
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
