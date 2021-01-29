<template>
  <Container>
    <header>
      <img src="@/assets/observatories/logo.svg" />
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
        <ObservatoryListItem
          v-for="observatory in observatories"
          :key="observatory.id"
          :observatory="observatory"
        />
      </ul>
    </div>
  </Container>
</template>

<script>
import Container from "@/components/Container";
import ObservatoryListItem from "@/components/ObservatoryListItem";
import { observatoriesService } from "../services";

export default {
  name: "ExploreObservatories",
  components: {
    Container,
    ObservatoryListItem,
  },
  data() {
    return {
      observatories: [],
    };
  },
  created() {
    this.fetchAllObservatories();
  },
  methods: {
    fetchAllObservatories() {
      observatoriesService.fetchAll().then((observatories) => {
        this.observatories = observatories;
      });
    },
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
</style>
