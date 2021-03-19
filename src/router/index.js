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
      import(/* webpackChunkName: "Observatory" */ "@/views/Observatory.vue"),
  },
  {
    path: "/biography/",
    name: "Biography",
    component: () =>
      import(/* webpackChunkName: "Biography" */ "@/views/Biography.vue"),
    meta: { bodyClass: "alto" },
  },
  {
    path: "/art-statement/",
    name: "ArtStatement",
    component: () =>
      import(/* webpackChunkName: "ArtStatement" */ "@/views/ArtStatement.vue"),
    meta: { bodyClass: "alto" },
  },
  {
    path: "/connect/",
    name: "Connect",
    component: () =>
      import(/* webpackChunkName: "Connect" */ "@/views/Connect.vue"),
    meta: { bodyClass: "alto" },
  },
  {
    path: "/inspiration/",
    name: "Inspiration",
    component: () =>
      import(/* webpackChunkName: "Inspiration" */ "@/views/Inspiration.vue"),
    meta: { bodyClass: "alto" },
  },
  {
    path: "/the-film/",
    name: "TheFilm",
    component: () =>
      import(/* webpackChunkName: "TheFilm" */ "@/views/TheFilm.vue"),
    meta: { bodyClass: "alto" },
  },
  {
    path: "/film-reviews/",
    name: "Reviews",
    component: () =>
      import(/* webpackChunkName: "Reviews" */ "@/views/Reviews.vue"),
    meta: { bodyClass: "alto" },
  },
  {
    path: "/observatory/:name/sequence",
    name: "ObservatorySequence",
    component: () =>
      import(
        /* webpackChunkName: "ObservatorySequence" */ "@/views/ObservatorySequence.vue"
      ),
    meta: {
      bodyClass: "scroll-lock",
    },
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
