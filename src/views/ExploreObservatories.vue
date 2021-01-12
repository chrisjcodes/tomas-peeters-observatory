<template>
  <Container>
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
      <ul class="menu">
        <!--extract into component for map -->
        <router-link to="/observatory/i"
          ><li class="menu-item">
            <span>
              <GradientText theme="yellow-to-gold">I</GradientText>
            </span>
            <div class="menu-item-image">
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
            <div class="menu-item-image">
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
            <div class="menu-item-image">
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
            <div class="menu-item-image">
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
            <div class="menu-item-image">
              <img
                src="https://images.unsplash.com/photo-1508615039623-a25605d2b022?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
                alt="#"
              />
            </div></li
        ></router-link>
        <!-- <router-link to="/observatory/vi"
          ><li class="menu-item">
            <span>
              <GradientText theme="yellow-to-gold">VI</GradientText>
            </span>
            <div class="menu-item-image">
              <img
                src="https://images.unsplash.com/photo-1508615039623-a25605d2b022?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
                alt="#"
              />
            </div></li
        ></router-link> -->
      </ul>
    </div>
  </Container>
</template>

<script>
import Container from "@/components/Container";
import GradientText from "@/components/GradientText";

export default {
  name: "ExploreObservatories",
  components: {
    Container,
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
  margin-top: rem(45px);
  margin-right: rem(25px);
  margin-left: rem(25px);
  margin-bottom: rem(45px);

  @include media(">desktop") {
    max-width: rem(1200px);
    margin-right: auto;
    margin-left: auto;
  }
}

header {
  display: flex;
  justify-content: center;
  margin-bottom: rem(60px);

  img {
    height: 100%;
    width: 100%;
  }

  @include media(">=tablet") {
    img {
      width: 80%;
    }
  }

  @include media(">=desktop") {
    img {
      width: 60%;
    }
  }
}

.explore-observatories-copy {
  @include robotoLight;

  display: flex;
  justify-content: center;
}

.copy-text {
  p {
    color: $silver;
    font-size: rem(16px);
    text-transform: uppercase;
    letter-spacing: rem(8px);
    text-align: center;
    line-height: 1.8;
    margin-bottom: rem(50px);
  }

  @include media(">=desktop") {
    width: 70vw;
  }
}

.menu-wrapper {
  display: flex;
  justify-content: center;
  margin: rem(30px) auto;
}

.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style-type: none;

  a {
    color: inherit;
    text-decoration: none;
  }
}

.menu-item {
  @include robotoSlabRegular;
  margin: rem(24px);
  text-align: center;
}

.menu-item-image {
  margin: rem(10px) auto 0 auto;
  border: rem(2px) solid white;
  width: rem(300px);
  height: rem(300px);

  img {
    width: 100%;
    height: 100%;
  }

  @include media(">=desktop") {
    width: rem(250px);
    height: rem(250px);
  }
}
</style>
