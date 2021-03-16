<template>
  <div>
    <GlobalNavigation />
    <div id="app">
      <transition :name="transitionName" :mode="transitionMode">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import GlobalNavigation from "@/components/GlobalNavigation";

const DEFAULT_TRANSITION = "fade";
const DEFAULT_TRANSITION_MODE = "out-in";

export default {
  name: "App",
  components: {
    GlobalNavigation,
  },
  data() {
    return {
      transitionName: DEFAULT_TRANSITION,
      transitionMode: DEFAULT_TRANSITION_MODE,
    };
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName || from.meta.transitionName;
      let transitionMode = to.meta.transitionMode || from.meta.transitionMode;

      if (transitionName === "slide") {
        const toDepth = to.path.split("/").length;
        const fromDepth = from.path.split("/").length;
        transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
      }

      this.transitionName = transitionName || DEFAULT_TRANSITION;
      this.transitionMode = transitionMode || DEFAULT_TRANSITION_MODE;

      next();
    });
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

.fade-enter-active,
.fade-leave-active {
  transition-duration: 2s;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 1s;
  transition-property: opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(0, 10em);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(0, -10em);
}

html {
  font-size: $base-rem-size;
}

body {
  @include primary-sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-transform: uppercase;
  background-color: $black;
  color: map-get($typeface-colors, "light-primary");
}

html,
body {
  min-height: 100%;
}

body.scroll-lock {
  overflow: hidden;
}

#app {
  z-index: 0;
}
</style>
