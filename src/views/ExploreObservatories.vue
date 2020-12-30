<template>
  <div class="container">
    <header>
      <img src="@/assets/landing/images/logo.svg" />
    </header>
    <div class="explore-observatories-copy">
      <div class="copy-text">
        <p>
          The Observatories Collapse The Space Between What You Are Looking At
          And Where You Are Seeing From
        </p>
        <p>
          When All Distance Collapses You Are No Longer Looking Into The World
          All Of The World Is Looking Out Of You
        </p>
        <p>
          What You Are Looking At Is Where You Are Seening From
        </p>
      </div>
    </div>
    <div class="menu-wrapper">
      <ul class="menu-grid">
        <!--extract into component for map -->
        <router-link to="/observatory/i"
          ><li class="menu-item">
            <span>
              <GradientText theme="yellow-to-gold">I</GradientText>
            </span>
            <div class="item-inner">
              <img
                src="https://images.unsplash.com/photo-1508615039623-a25605d2b022?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
                alt="#"
              />
            </div></li
        ></router-link>
        <!-- -->

        <router-link to="/observatory/ii"
          ><li class="menu-item">
            <span>
              <GradientText theme="yellow-to-gold">II</GradientText>
            </span>
            <div class="item-inner">
              <img
                src="https://images.unsplash.com/photo-1508615039623-a25605d2b022?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
                alt="#"
              />
            </div></li
        ></router-link>
        <router-link to="/observatory/iii"
          ><li class="menu-item">
            <span>
              <GradientText theme="yellow-to-gold">III</GradientText>
            </span>
            <div class="item-inner">
              <img
                src="https://images.unsplash.com/photo-1508615039623-a25605d2b022?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
                alt="#"
              />
            </div></li
        ></router-link>
        <router-link to="/observatory/iv">
          <li class="menu-item">
            <span>
              <GradientText theme="yellow-to-gold">IV</GradientText>
            </span>
            <div class="item-inner">
              <img
                src="https://images.unsplash.com/photo-1508615039623-a25605d2b022?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
                alt="#"
              />
            </div></li
        ></router-link>
        <router-link to="/observatory/v">
          <li class="menu-item">
            <span>
              <GradientText theme="yellow-to-gold">V</GradientText>
            </span>
            <div class="item-inner">
              <img
                src="https://images.unsplash.com/photo-1508615039623-a25605d2b022?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
                alt="#"
              />
            </div></li
        ></router-link>
        <router-link to="/observatory/vi"
          ><li class="menu-item">
            <span>
              <GradientText theme="yellow-to-gold">VI</GradientText>
            </span>
            <div class="item-inner">
              <img
                src="https://images.unsplash.com/photo-1508615039623-a25605d2b022?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
                alt="#"
              />
            </div></li
        ></router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import GradientText from "@/components/GradientText";

export default {
  name: "ExploreObservatories",
  components: {
    GradientText,
  },
};
</script>

<style lang="scss" scoped>
@import "@/theme/colors.scss";
@import "@/theme/media.scss";
@import "@/theme/sizing.scss";
@import "@/theme/typography.scss";

.container {
  margin: rem(2px);
}

header {
  display: flex;
  justify-content: center;
  width: 100vw;
  height: rem(150px);
  margin-bottom: rem(60px);

  img {
    width: 100%;
  }
}

.explore-observatories-copy {
  @include robotoLight;

  display: flex;
  justify-content: center;
}

.copy-text {
  width: 90vw;

  p {
    color: $silver;
    font-size: rem(16px);
    text-transform: uppercase;
    letter-spacing: rem(8px);
    text-align: center;
    line-height: 1.8;
    margin-bottom: rem(50px);
  }

  @include media(">=tablet") {
    width: 70vw;
    font-size: rem(28px);
  }
}

.menu-wrapper {
  display: flex;
  width: 100vw;
  justify-content: center;
  margin: rem(30px) auto;

  @include media(">desktop") {
    width: 70vw;
  }
}

.menu-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  list-style-type: none;
  margin-block-start: 0px;
  margin-block-end: 0px;
  padding-inline-start: 0px;

  a {
    color: inherit;
    text-decoration: none;
  }
}

.menu-item {
  @include robotoSlabRegular;
  width: rem(320px);
  height: rem(320px);
  margin: rem(24px);
  text-align: center;
  cursor: pointer;
}

.item-inner {
  width: rem(300px);
  height: rem(300px);
  margin: rem(10px) auto 0 auto;
  border: rem(2px) solid white;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
