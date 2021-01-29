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
    meta: { bodyClass: "light" },
  },
  {
    path: "/observatory/:name/sequence",
    name: "ObservatorySequence",
    component: () =>
      import(
        /* webpackChunkName: "ObservatorySequence" */ "@/views/ObservatorySequence.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

const vueBodyClass = new VueBodyClass(routes);
router.beforeEach((to, from, next) => {
  vueBodyClass.guard(to, next);
});

export default router;
