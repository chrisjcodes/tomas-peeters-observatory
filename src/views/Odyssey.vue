<template>
  <WritingPage imageFileName="odyssey.jpeg">
    <template v-slot:titleA>Observatory</template>
    <template v-slot:titleB>Odyssey</template>
    <template v-slot:link-menu>
      <a href="#">Observatory Odyssey</a>
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
      <p>
        Watch Observatory Odyssey
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
