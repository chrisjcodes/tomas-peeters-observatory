<template>
  <div>
    <section>
      <header>
        <img src="@/assets/triptychs/i/logo.svg" />
      </header>
      <div class="panel-container">
        <div class="panel-item">
          <img src="@/assets/triptychs/i/a.jpg" />
        </div>
        <div class="panel-item">
          <img src="@/assets/triptychs/i/b.jpg" />
        </div>
        <div class="panel-item">
          <img src="@/assets/triptychs/i/c.jpg" />
        </div>
      </div>
      <div class="copy-container">
        <p>What you are looking for is your single eye</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/theme/colors.scss";
@import "@/theme/media.scss";
@import "@/theme/sizing.scss";
@import "@/theme/typography.scss";

section {
  padding-top: rem(60px);
}

header {
  display: flex;
  justify-content: center;
  margin-bottom: rem(60px);

  img {
    height: 100%;
    width: 40%;
  }
}

.panel-container {
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  grid-gap: 5px;
  margin-left: 10vw;
  margin-right: 10vw;
  margin-bottom: rem(50px);
}

.panel-item {
  grid-column: auto;

  img {
    height: 100%;
    width: 100%;
  }
}

.copy-container {
  p {
    @include primary-sans-serif;
    text-align: center;
    color: rgba($white, 0.55);

    font-size: map-get($font-sizing, "lg");
    letter-spacing: map-get($letter-spacing, "lg");
  }
}
</style>
