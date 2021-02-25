<template>
  <div class="root" :class="{ show: isShowing }">
    <div class="menu-icon" @click="toggleOpen"></div>
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
            <CustomLink theme="spotlight-light-primary"
              >About The Artist</CustomLink
            >
          </li>
          <li>
            <CustomLink theme="spotlight-light-primary"
              >Art Statement</CustomLink
            >
          </li>
          <li>
            <CustomLink theme="spotlight-light-primary">The Film</CustomLink>
          </li>
          <li>
            <CustomLink theme="spotlight-light-primary">Contact</CustomLink>
          </li>
          <li>
            <CustomLink theme="spotlight-light-primary">Link</CustomLink>
          </li>
          <li>
            <CustomLink theme="spotlight-light-primary">Link</CustomLink>
          </li>
          <li>
            <CustomLink theme="spotlight-light-primary">Link</CustomLink>
          </li>
          <li>
            <CustomLink theme="spotlight-light-primary">Link</CustomLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import CustomLink from "@/components/CustomLink";
const HIDDEN_ROUTE_PATHS = ["/"];
export default {
  data() {
    return {
      isShowing: true,
      isOpen: false,
    };
  },
  components: {
    CustomLink,
  },
  created() {
    this.toggleHidden();
  },
  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen;
    },
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
    toggleHidden() {
      const currentRoutePath = this.$route.path;

      if (HIDDEN_ROUTE_PATHS.includes(currentRoutePath)) {
        this.isShowing = false;
      } else {
        this.isShowing = true;
      }
    },
    onRouteChange() {
      this.toggleHidden();
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
@import "@/theme/sizing.scss";
@import "@/theme/typography.scss";

.root {
  position: fixed;
  z-index: 9999;
  top: 0;
  bottom: 0;
  height: 100%;
  display: none;

  &.show {
    display: block;
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
  width: rem(60px);
  height: rem(60px);
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
}

// .menu-bar-partial {
//   position: absolute;
//   z-index: 1000;
//   top: 0;
//   bottom: 0;
//   height: 100%;
//   width: 350px;
//   background-image: url("http://api.thumbr.it/whitenoise-361x370.png?background=00000000&noise=ffffff&density=50&opacity=5");
//   transition: all 2s cubic-bezier(0.37, 0, 0.63, 1);
//   opacity: 0;
//   transform: translateX(-100%);

//   &.open {
//     transform: translateX(0);
//     opacity: 1;
//   }
// }

.menu-bar-full {
  position: absolute;
  z-index: 1000;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 100vw;
  //   width: 350px;
  //   background-image: url("http://api.thumbr.it/whitenoise-361x370.png?background=00000000&noise=ffffff&density=50&opacity=5");
  background: rgba($black, 0.98);
  transition: opacity 1.25s cubic-bezier(0.37, 0, 0.63, 1);
  opacity: 0;
  pointer-events: none;
  //   transform: translateX(-100%);

  &.open {
    // transform: translateX(0);
    opacity: 0.98;
    pointer-events: all;
  }
}

.menu-items {
  padding-top: 150px;
}

.menu-list {
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    display: block;
    margin-bottom: 45px;
    text-align: center;
    letter-spacing: map-get($letter-spacing, "md");
    font-size: map-get($font-sizing, "lg");
  }
}
</style>
