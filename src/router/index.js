import Vue from "vue";
import VueRouter from "vue-router";
import VueBodyClass from "vue-body-class";
import Landing from "@/views/Landing.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/explore-observatories",
    name: "ExploreObservatories",
    component: () =>
      import(
        /* webpackChunkName: "ExploreObservatories" */ "@/views/ExploreObservatories.vue"
      ),
  },
  {
    path: "/observatory/:name",
    name: "Observatory",
    component: () =>
      import(/* webpackChunkName: "Observatory" */ "@/views/Observatory"),
  },
  {
    path: "/writing/biography/",
    name: "Biography",
    component: () =>
      import(/* webpackChunkName: "Biography" */ "@/views/Biography.vue"),
  },
  {
    path: "/writing/art-statement/",
    name: "ArtStatement",
    component: () =>
      import(/* webpackChunkName: "ArtStatement" */ "@/views/ArtStatement.vue"),
  },
  {
    path: "/writing/connect/",
    name: "Connect",
    component: () =>
      import(/* webpackChunkName: "Connect" */ "@/views/Connect.vue"),
  },
  {
    path: "/writing/inspiration/",
    name: "Inspiration",
    component: () =>
      import(/* webpackChunkName: "Inspiration" */ "@/views/Inspiration.vue"),
  },
  {
    path: "/writing/the-film/",
    name: "TheFilm",
    component: () =>
      import(/* webpackChunkName: "TheFilm" */ "@/views/TheFilm.vue"),
  },
  {
    path: "/writing/film-reviews/",
    name: "Reviews",
    component: () =>
      import(/* webpackChunkName: "Reviews" */ "@/views/Reviews.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    // return { x: 0, y: 0 };
  },
});

const vueBodyClass = new VueBodyClass(routes);

router.beforeEach((to, from, next) => {
  vueBodyClass.guard(to, next);
});

export default router;
