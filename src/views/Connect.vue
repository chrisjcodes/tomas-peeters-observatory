<template>
  <WritingPage mainImagePath="@/assets/writing-pages/bio/main.jpg">
    <template v-slot:titleA>CONNECT</template>
    <template v-slot:titleB>COLLABORATE</template>
    <template v-slot:copy>
      <p>
        The Observatories collapse the distance between the space you are
        looking from and the space I am seeing from.
      </p>
      <p>
        If you resonate with seeing from the clarity of your own absence, I am
        interested in connecting.
      </p>
      <p>
        Contact me if in any way you feel inspired to engage with the
        Observatories. I am grateful for any interest, input, support, and the
        possibility to collaborate.
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
