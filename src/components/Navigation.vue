<template>
  <nav>
    <div class="hamburger" @click="open()">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <ul class="nav-links">
      <Container :containOn="['l', 'r']">
        <li>
          <CustomLink to="/">
            Home
          </CustomLink>
        </li>
        <li>
          <CustomLink to="/explore-observatories">
            Explore The Observatories
          </CustomLink>
        </li>
        <li>
          <CustomLink>
            Writtings
          </CustomLink>
        </li>
      </Container>
    </ul>
  </nav>
</template>

<script>
import Container from "@/components/Container";
import CustomLink from "@/components/CustomLink";
export default {
  name: "Navigation",
  components: {
    Container,
    CustomLink,
  },
  methods: {
    open: () => {
      const navLinks = document.querySelector(".nav-links");
      const links = document.querySelectorAll(".nav-links li");
      navLinks.classList.toggle("open");
      links.forEach((link) => {
        link.classList.toggle("fade");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/theme/colors.scss";
@import "@/theme/media.scss";
@import "@/theme/sizing.scss";
@import "@/theme/typography.scss";

nav {
  position: fixed;
  margin-top: rem(-45px);
}

.hamburger {
  z-index: 2;
  position: absolute;
  cursor: pointer;
  transform: translate(50%, 50%);
}

.nav-links {
  display: flex;
  list-style: none;
  justify-content: space-around;
  align-items: center;
  margin-right: auto;
  pointer-events: none;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  position: fixed;
  background: $silver;
  opacity: 0;
  height: 100%;
  width: 100%;
  flex-direction: column;
  clip-path: circle(10px at 6% 5%);
  -webkit-clip-path: circle(10px at 6% 5%);
  transition: all 0.5s ease-out;
  overflow: hidden;
  text-align: center;
  padding: 0;

  a {
    color: black;
    text-decoration: none;
    font-size: rem(20px);
  }

  li {
    opacity: 0;
    cursor: pointer;
    margin-bottom: rem(100px);
  }
}

.open {
  clip-path: circle(1500px at 5% -10%);
  -webkit-clip-path: circle(1500px at 5% -10%);
  opacity: 1;
  pointer-events: all;

  @include media(">=desktop") {
    clip-path: circle(4000px at 5% -10%);
    -webkit-clip-path: circle(4000px at 5% -10%);
  }
}

.nav-links li:nth-of-type(1) {
  transition: all 0.5s ease 0.2s;
}
.nav-links li:nth-of-type(2) {
  transition: all 0.5s ease 0.4s;
}
.nav-links li:nth-of-type(3) {
  transition: all 0.5s ease 0.6s;
}

li.fade {
  opacity: 1;
}

.line {
  width: 30px;
  height: 3px;
  background: white;
  margin: 5px;
}
</style>
