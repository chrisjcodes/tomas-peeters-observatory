import Vue from "vue";
import VueRouter from "vue-router";
import VueBodyClass from "vue-body-class";
import VueSimpleMarkdown from "vue-simple-markdown";
import Landing from "@/views/Landing.vue";
import "vue-simple-markdown/dist/vue-simple-markdown.css";

Vue.use(VueRouter);
Vue.use(VueSimpleMarkdown);

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
    path: "/writing/",
    name: "WritingPage",
    component: () =>
      import(/* webpackChunkName: "WritingPage" */ "@/views/WritingPage.vue"),
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
