<template>
  <Container headerLogo="@/assets/landing/images/logo.svg">
    <div class="observatorySequence-copy">
      <div class="slick-container">
        <Slick
          class="slick-slider"
          data-slick='{"arrows":false, "infinite":true}'
        >
          <div>
            <img
              src="https://images.unsplash.com/photo-1557576146-047908becbb4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8b25lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1577228232276-da3cbc016be0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fG51bWJlciUyMDJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1572324755260-ec8c3e7fae29?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fG51bWJlciUyMDJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            />
          </div>
        </Slick>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from "../components/Container";
import Slick from "vue-slick";

export default {
  name: "ObservatorySequence",
  components: { Container, Slick },
  mounted() {
    console.log("component mounted");
  },
};
</script>

<style lang="scss" scoped>
@import "@/theme/colors.scss";
@import "@/theme/media.scss";
@import "@/theme/sizing.scss";
@import "@/theme/typography.scss";

.observatorySequence-copy {
  @include robotoLight;

  font-size: rem(16px);
  text-transform: uppercase;
  letter-spacing: rem(10px);
  text-align: center;
  margin-bottom: rem(80px);

  @include media(">=tablet") {
    font-size: rem(30px);
  }

  p {
    color: $silver;
  }
}

.slick-slider {
  img {
    width: 100%;
  }
}
</style>
