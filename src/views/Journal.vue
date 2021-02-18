<template>
  <Container>
    <div class="title">
      <h1>Example title</h1>
    </div>
    <div class="content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac
        turpis egestas maecenas pharetra convallis. Sit amet mauris commodo quis
        imperdiet massa. Elementum tempus egestas sed sed risus. Pulvinar sapien
        et ligula ullamcorper malesuada proin libero nunc. Dolor purus non enim
        praesent elementum. Platea dictumst vestibulum rhoncus est pellentesque
        elit ullamcorper dignissim cras. Massa ultricies mi quis hendrerit. Elit
        sed vulputate mi sit. Scelerisque varius morbi enim nunc faucibus a
        pellentesque sit. Eu augue ut lectus arcu bibendum. Ut lectus arcu
        bibendum at varius vel pharetra vel. Praesent semper feugiat nibh sed
        pulvinar.
      </p>

      <p>
        Porttitor eget dolor morbi non arcu. Convallis convallis tellus id
        interdum velit laoreet id donec ultrices. Maecenas volutpat blandit
        aliquam etiam erat velit scelerisque. Amet risus nullam eget felis eget
        nunc lobortis. Egestas quis ipsum suspendisse ultrices gravida dictum.
        Fermentum posuere urna nec tincidunt praesent semper feugiat. Quis
        commodo odio aenean sed adipiscing diam donec. Amet massa vitae tortor
        condimentum lacinia quis. Morbi tempus iaculis urna id volutpat.
        Dignissim sodales ut eu sem integer vitae justo. Laoreet suspendisse
        interdum consectetur libero id. Aenean et tortor at risus viverra.
        Lobortis scelerisque fermentum dui faucibus in ornare quam. Nulla
        pellentesque dignissim enim sit. Curabitur vitae nunc sed velit
        dignissim sodales ut eu.
      </p>
    </div>
  </Container>
</template>

<script>
import Container from "../components/Container";
export default {
  name: "Journal",
  components: {
    Container,
  },
};
</script>

<style lang="scss" scoped>
@import "@/theme/colors.scss";
@import "@/theme/media.scss";
@import "@/theme/sizing.scss";
@import "@/theme/typography.scss";

.title {
  text-align: center;
}

.content {
  text-align: center;
  p {
    font-size: map-get($font-sizing, "sm");
    line-height: rem(25px);
    padding: 0 rem(5px);
    margin-bottom: rem(50px);
  }
}
</style>
