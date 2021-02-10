<template>
  <Container>
    <header>
      <img src="@/assets/observatories/logo.svg" />
    </header>
    <div class="copy-container">
      <p>
        what you are looking at
      </p>
      <p>
        is where you are seeing from
      </p>
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

header {
  display: flex;
  justify-content: center;
  margin-bottom: rem(80px);

  img {
    height: 100%;
    width: 100%;
  }

  @include media(">=tablet") {
    img {
      width: 90%;
    }
  }
}

.copy-container {
  font-size: map-get($font-sizing, "sm");
  letter-spacing: map-get($letter-spacing, "sm");
  text-align: center;
  margin-bottom: rem(60px);

  @include media(">=tablet") {
    font-size: map-get($font-sizing, "lg");
    letter-spacing: map-get($letter-spacing, "xl");
  }

  @include media(">=desktop") {
    font-size: map-get($font-sizing, "xl");
    letter-spacing: map-get($letter-spacing, "xl");
  }
}

.menu-wrapper {
  display: flex;
  justify-content: center;
  margin: rem(30px) auto;
}

.menu {
  margin: 0;
  padding: 0;
  list-style-type: none;
  font-size: map-get($font-sizing, "lg");
  display: grid;
  gap: rem(30px);
  padding-bottom: rem(60px);

  a {
    color: inherit;
    text-decoration: none;
  }

  @include media(">=tablet") {
    grid-template-columns: repeat(2, 1fr);
  }

  @include media(">=desktop") {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
