<template>
  <WritingPage imageFileName="odyssey.jpeg">
    <template v-slot:titleA>Observatory</template>
    <template v-slot:titleB>Odyssey</template>
    <template v-slot:link-menu>
      <router-link to="/theatre/508683222">Observatory Odyssey</router-link>
    </template>
    <template v-slot:copy>
      <p>
        The Observatories collapse the space between what I am looking at and
        where I am seeing from.
      </p>
      <p>
        When all distance collapses, I am no longer looking into the world—all
        of the world is looking out of me.
      </p>
      <p>
        What I am looking at is where I am seeing from.
      </p>
    </template>
  </WritingPage>
</template>

<script>
import WritingPage from "@/components/WritingPage";
export default {
  components: {
    WritingPage,
  },
};
</script>

<style lang="scss" scoped>
@import "@/theme/colors.scss";
@import "@/theme/media.scss";
@import "@/theme/sizing.scss";
@import "@/theme/typography.scss";

p {
  font-size: map-get($font-sizing, "lg");
  text-transform: none;
  color: $black;
  line-height: 1.75;
  text-align: center;
  text-transform: uppercase;

  @include media(">=tablet") {
    letter-spacing: map-get($letter-spacing, "md");
  }

  p:first-child {
    margin-top: 0 !important;
    padding-top: 0 !important;
  }
}
</style>
