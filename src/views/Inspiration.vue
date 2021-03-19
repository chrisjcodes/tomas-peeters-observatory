<template>
  <WritingPage mainImagePath="@/assets/writing-pages/bio/main.jpg">
    <template v-slot:titleA>INSPIRATION</template>
    <template v-slot:titleB>GRATITUDE</template>
    <template v-slot:copy>
      <p>
        Douglass Harding’s revolutionary experiments have greatly contributed to
        the creation of my Observatories. What keeps me exploring his work is
        his use of the physicality of form to reveal the formlessness of being.
        His communication made it clear that I am looking out from this
        boundless emptiness that is at no distance from this turbulent world.
        Thank you, Douglass.
      </p>
      <p>
        Through Rupert Spira’s work, I have come to see that what I am can never
        be found by looking for it. This knowingness that I am here, and the
        inability to find what is here, is central to my Observatories. What it
        reveals is that I am already looking out from that which I am searching
        for. Thank you, Rupert.
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
