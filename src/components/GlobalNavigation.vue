<template>
  <div class="root" :class="{ show: isShowing }">
    <div
      class="menu-icon"
      :class="{ inverted: isInverted, open: isOpen }"
      @click="toggleOpen"
    ></div>
    <div class="menu-bar-full" :class="{ open: isOpen }">
      <nav class="menu-items">
        <ul class="menu-list">
          <li>
            <CustomLink
              theme="spotlight-light-primary"
              to="/explore-observatories"
              >Observatories</CustomLink
            >
          </li>
          <li>
            <CustomLink theme="spotlight-light-primary">Triptychs</CustomLink>
          </li>
          <li>
            <CustomLink to="/writing/biography" theme="spotlight-light-primary"
              >Biography</CustomLink
            >
          </li>
          <li>
            <CustomLink
              to="/writing/art-statement"
              theme="spotlight-light-primary"
              >Art Statement</CustomLink
            >
          </li>
          <li>
            <CustomLink
              to="/writing/inspiration"
              theme="spotlight-light-primary"
              >Inspiration</CustomLink
            >
          </li>
          <li>
            <CustomLink to="/writing/the-film" theme="spotlight-light-primary"
              >The Film</CustomLink
            >
          </li>
          <li>
            <CustomLink
              to="/writing/film-reviews"
              theme="spotlight-light-primary"
              >Film Reviews</CustomLink
            >
          </li>
          <li>
            <CustomLink to="/writing/connect" theme="spotlight-light-primary"
              >Connect</CustomLink
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import * as R from "ramda";
import CustomLink from "@/components/CustomLink";
const HIDDEN_ROUTE_PATH_REGEXPS = [/^\/$/, /^\/observatory\/.+\/sequence$/];
const hiddenRouteMatchers = R.map(R.test, HIDDEN_ROUTE_PATH_REGEXPS);
const isMatchingHiddenRoute = R.anyPass(hiddenRouteMatchers);

const INVERTED_ROUTE_PATH_REGEXPS = [/^\/writing/];
const invertedRouteMatchers = R.map(R.test, INVERTED_ROUTE_PATH_REGEXPS);
const isInvertedRoute = R.anyPass(invertedRouteMatchers);

export default {
  data() {
    return {
      isShowing: true,
      isOpen: false,
      isInverted: false,
    };
  },
  components: {
    CustomLink,
  },
  created() {
    this.toggleHidden();
    this.toggleInversion();
  },
  methods: {
    toggleOpen() {
      if (!this.isOpen) {
        this.open();
      } else {
        this.close();
      }
    },
    open() {
      this.isOpen = true;
      document.body.classList.add("scroll-lock");
    },
    close() {
      this.isOpen = false;
      document.body.classList.remove("scroll-lock");
    },
    toggleHidden() {
      const currentRoutePath = this.$route.path;
      if (isMatchingHiddenRoute(currentRoutePath)) {
        this.isShowing = false;
      } else {
        this.isShowing = true;
      }
    },
    toggleInversion() {
      const currentRoutePath = this.$route.path;
      if (isInvertedRoute(currentRoutePath)) {
        this.isInverted = true;
      } else {
        this.isInverted = false;
      }
    },
    onRouteChange() {
      this.toggleHidden();
      this.toggleInversion();
      this.close();
    },
  },
  watch: {
    $route: "onRouteChange",
  },
};
</script>

<style lang="scss" scoped>
@import "@/theme/colors.scss";
@import "@/theme/media.scss";
@import "@/theme/sizing.scss";
@import "@/theme/typography.scss";

.root {
  z-index: 9999;
  top: 0;
  bottom: 0;
  height: 100%;
  transition: opacity 500ms ease;
  opacity: 0;
  pointer-events: none;

  &.show {
    opacity: 1;
    pointer-events: all;
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.menu-icon {
  cursor: pointer;
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 9999;
  width: rem(40px);
  height: rem(40px);
  background-image: url("../assets/menu-icon.png");
  background-size: contain;
  background-repeat: no-repeat;
  transition: all 1s ease-in-out;
  opacity: 0.5;
  transform-origin: center center;
  animation-name: spin;
  animation-duration: 30s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  &:hover {
    opacity: 1;
  }

  @include media(">=tablet") {
    top: rem(20px);
    left: rem(20px);
    width: rem(50px);
    height: rem(50px);
  }

  @include media(">desktop") {
    width: rem(60px);
    height: rem(60px);
    top: 40px;
    left: 30px;
  }
}

.menu-icon.inverted {
  opacity: 1;
  filter: invert(1);

  &.open {
    filter: none;
  }

  &:hover {
    opacity: 0.5;
  }
}

.menu-bar-full {
  position: fixed;
  z-index: 1000;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100vw;
  background: rgba($black, 0.98);
  transition: opacity 1.25s cubic-bezier(0.37, 0, 0.63, 1);
  opacity: 0;
  pointer-events: none;

  &.open {
    opacity: 0.98;
    pointer-events: all;
  }
}

.menu-items {
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-list {
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    display: block;
    margin-bottom: 35px;
    text-align: center;
    letter-spacing: map-get($letter-spacing, "md");
    font-size: map-get($font-sizing, "lg");
  }
}
</style>
