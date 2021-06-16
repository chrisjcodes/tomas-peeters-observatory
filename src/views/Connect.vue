<template>
  <WritingPage imageFileName="connect.jpeg">
    <template v-slot:titleA>CONTACT</template>
    <template v-slot:titleB>TOMAS</template>
    <template v-slot:copy>
      <div class="contact">
        <div class="contact-row">
          <div class="contact-cell label">Email</div>
          <div class="contact-cell value">
            <a href="mailto:tomaspeeters@zerodistance.space"
              >tomaspeeters@zerodistance.space</a
            >
          </div>
        </div>
        <div class="contact-row">
          <div class="contact-cell label">Instagram</div>
          <div class="contact-cell value">@zero_distance_</div>
        </div>
        <div class="contact-row">
          <div class="contact-cell label">Vimeo</div>
          <div class="contact-cell value">
            <a target="_blank" href="https://vimeo.com/zerodistance"
              >https://vimeo.com/zerodistance</a
            >
          </div>
        </div>
        <div class="contact-row">
          <div class="contact-cell label">Website</div>
          <div class="contact-cell value">
            <a target="_blank" href="https://zerodistance.space"
              >http://zerodistance.space</a
            >
          </div>
        </div>
      </div>
      <p>
        Whether you are intrigued, disoriented, or enraptured by these
        Observatories, I am eager to hear what you have to say. Contact me
        -let’s start a conversation!
      </p>
      <h1>ENCOUNTER OBSERVATORIES</h1>
      <p>
        Is seeing the absence of yourself all you ever wanted? These
        cutting-edge Observatories will leave you headless, where only luminous
        emptiness remains. Contact the artist for upcoming opportunities to
        enter these space-collapsing Observatories and see the radiance of your
        own absence.
      </p>
      <h1>DISPLAY OBSERVATORIES</h1>
      <p>
        These Observatories are not meant to be looked at; they are to be seen
        through until the clear emptiness at their center is perceived. Then,
        this transparent presence is pulled into your seeing space and reveals
        that on your side, there is only radiant emptiness. Contact the artist
        if you resonate with seeing from this clear absence and feel inspired to
        expose these space-collapsing Observatories to a wider public.
      </p>
      <h1>PURCHASE OBSERVATORIES</h1>
      <p>
        When you own one of these space-collapsing Observatories, you are
        indirectly a part of realizing the larger aspiration of this work. I
        envision a series of public Observatories located on high mountaintops
        as outposts for anyone that yearns to experience the dimensionless
        collapse of space. These Observatories are calibrated to dissolve any
        dividing line between the boundless mountain ranges surrounding you and
        your centerless seeing. Forged out of three-dimensional space, these
        sculptures reveal that what you are looking at, is where you are seeing
        from.
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

h1 {
  font-weight: 200;
  font-size: map-get($font-sizing, "jumbo2");
  letter-spacing: map-get($letter-spacing, "xl");
  text-align: center;
}

.contact {
  width: 100%;
  margin-bottom: rem(60px);
}

.contact-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: rem(10px);
}

.contact-cell {
  display: flex;

  &.label {
    letter-spacing: map-get($letter-spacing, "md");
    text-transform: uppercase;
  }

  &.value {
    a {
      text-decoration: none;
      color: inherit;
      position: relative;

      &:after {
        transition: opacity 500ms ease;
        background: black;
        opacity: 0.5;
        content: "";
        position: absolute;
        left: 0;
        bottom: 0px;
        height: 1px;
        width: 100%;
      }

      &:hover {
        &:after {
          opacity: 1;
        }
      }
    }
  }
}
</style>
