<template>
  <WritingPage imageFileName="the-film.jpeg">
    <template v-slot:titleA>ZERODISTANCE</template>
    <template v-slot:titleB>THE FILM</template>
    <template v-slot:link-menu>
      <div>
        <router-link to="/theatre/507280995">Trailer</router-link>
      </div>
      <div>
        <router-link to="/theatre/504619551">Zerodistance</router-link>
      </div>
      <div>
        <router-link to="/theatre/505809908">Glimpse</router-link>
      </div>
      <router-link to="/writing/film-reviews/">Reviews</router-link>
    </template>
    <template v-slot:copy>
      <p>
        Zero Distance captures the immersion of an observer, Hannah, within
        three Observatories. It takes you on a journey outside of space as seen
        through her eye.
      </p>

      <p>
        The evocative images allows you to see the world through the transparent
        eye of the heroin. Suddenly, you see that the boundless space she is
        seeing from is the same boundless space you are looking out from!
      </p>

      <p>
        Looking through the Observatories, she finds to her astonishment she is
        not appearing within her own experience! Instead, at no distance from
        herself, she simply finds the world.
      </p>

      <p>
        What she is looking for is that which is seeing.<br />
        What is seeing, she cannot find by looking.<br />
        What she is looking at is where she is seeing from.
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

<style></style>
