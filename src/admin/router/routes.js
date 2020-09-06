import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: '/about',
    components: {
      default: () => import("../pages/about"),
      header: () => import("../components/header")
    },
  },
  {
    path: '/',
    component: () => import("../pages/login"),
    meta: {
      public: true,
    }
  },
  {
    path: '/works',
    components: {
      default: () => import("../pages/works"),
      header: () => import("../components/header")
    },
  },
  {
    path: '/reviews',
    components: {
      default: () => import("../pages/reviews"),
      header: () => import("../components/header")
    },
  },
];

export default new VueRouter({ routes });