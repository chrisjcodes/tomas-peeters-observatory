<template>
  <WritingPage imageFileName="film-reviews.jpeg">
    <template v-slot:titleA>ZERODISTANCE</template>
    <template v-slot:titleB>FILM REVIEWS</template>
    <template v-slot:copy>
      <div class="review">
        <p class="review-copy">
          Since I was 10 years old, my dad has been sharing the zero distance
          experience with me. I have seen every prototype, every scrapped bit of
          writing, every version of this profound project. Yet every time I step
          inside an Observatory, I feel the same exhilaration wash over me. You
          need no background in non-duality, theology, or philosophy to
          understand the message. Because it’s simple. It feels like something
          you have always known and just forgotten along the way. Watch this
          film. Start to remember.
        </p>
        <div class="author">&mdash; Hannah Peeters, 24</div>
      </div>
      <div class="review">
        <p class="review-copy">
          Zero Distance makes you aware of the space we never think about. It
          exists in this world between your thoughts and what you see. I wish I
          could watch it for the first time again.
        </p>
        <div class="author">&mdash; Dean Shauger, 30</div>
      </div>
      <div class="review">
        <p class="review-copy">
          A visual wonder and emotional probe into my mind. Each viewing is
          completely distinct from the last. Loved every bit of the film.
        </p>
        <div class="author">&mdash; Ardyss, 25.</div>
      </div>
      <div class="review">
        <p class="review-copy">
          Surreal. It takes you out of your own reality, and makes you question
          it.
        </p>
        <div class="author">&mdash; Klinta, 29</div>
      </div>
      <div class="review">
        <p class="review-copy">
          A deep and beautiful exploration into, and out of, phenomenology.
          Peeters helps you find the self that you didn't know was lost and
          destroys what you thought knew about your conscious experience.
        </p>
        <div class="author">&mdash; James Silva, 29</div>
      </div>
      <div class="review">
        <p class="review-copy">
          This short film immerses you in an entrancing world of oneself. In
          these brief 15 minutes, you catch yourself wondering if you’ve been
          perceiving the world wrong all along, that you need to step back and
          see the world from a different perspective.
        </p>
        <div class="author">&mdash; Jahida Velasquez, 22</div>
      </div>
      <div class="review">
        <p class="review-copy">
          When you enter Tomas’ art, you may find that what you are attracted to
          is the mystery around the these almost otherworldly sculptural, and
          most decidedly functional devices. These futuristic-looking pieces are
          tools that provide the participator assistance in experiencing with
          what Tomas refers to as the empty eye of awareness.
        </p>
        <div class="author">&mdash; John Staling, 70</div>
      </div>
      <div class="review">
        <p class="review-copy">
          Zerodistance is a beautiful, meditative piece. It pulls you right in
          as you examine perspective, distance and self. The score is gorgeous-
          it's like a well choreographed dance.
        </p>
        <div class="author">&mdash; Susan Wachter, 56</div>
      </div>
      <div class="review">
        <p class="review-copy">
          I love the tempo, this sort of pulsing connectivity of light and sound
          and rhythm. I found myself watching the work and then at a certain
          point it felt like it was watching me. This shift is the exciting
          part. The tables turn. And then the tables disappear. It takes
          courage, maybe quiet courage, but nonetheless the kind that is filled
          with strength and openness. It is a taking off of the weight or burden
          of life, not a putting on. Come for the beauty, stay for the freedom,
          friend.
        </p>
        <div class="author">&mdash; Susanne Peeters, 50</div>
      </div>
      <div class="review">
        <p class="review-copy">
          Zero Distance has a very cinematic and hypnotic vibe to it in a really
          cool way. I felt immersed in it, as if I was the camera starring right
          back at Hannah. The music is stunning. The installation pieces shown
          blew me away. I loved the cinematography and the set-up of each shot.
          This is a very captivating piece of art.
        </p>
        <div class="author">&mdash; Sam Wachter,16</div>
      </div>
      <div class="review">
        <p class="review-copy">
          This journey into consciousness is guided by an entrancing, symbiotic
          experience of light and form. The fundamental nature of reality is
          explored with a beautiful blurring of inward and outward, self and
          other, matter and void.
        </p>
        <div class="author">&mdash; Becca Wachter, 26</div>
      </div>
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
.review {
  margin-bottom: 40px;
}

.review-copy {
  padding-top: 0;
  margin: 0;
}

.author {
  padding: 0;
  margin: 0;
  font-weight: 500;
}
</style>
