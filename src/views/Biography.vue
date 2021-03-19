<template>
  <WritingPage mainImagePath="@/assets/writing-pages/bio/main.jpg">
    <template v-slot:titleA>Biography</template>
    <template v-slot:titleB>Tomas Peeters</template>
    <template v-slot:copy>
      Tomas Peeters grew up in Antwerp, Belgium in the 1960s with a sense that
      there was something fundamentally incomplete about being in the world. He
      began creating physical objects to see what the empty space at zero
      distance from himself looks like. Along his quest, he graduated with a
      Bachelor of Arts in Sculpture from Sint-Lucas School of Art in Brussels,
      and then with a Master of Fine Arts from California State University,
      Northridge. In 2003, Tomas established Lumina Pura, his art and research
      studio in Los Angeles where he works with a small staff developing his
      life’s work: the Observatories. These sculptures are instruments built to
      look for the clear emptiness he is looking out from. After decades of
      searching, he came to the startling recognition that what he was looking
      for is simply that which is seeing! Tomas invites people into these
      space-collapsing sculptures, to have an unmediated seeing of this
      boundless emptiness they are looking out from. No longer is there
      something missing—there is simply this turbulent world!
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
