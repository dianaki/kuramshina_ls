import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import routes from "./routes";
import $axios from "../requests";

Vue.use(VueRouter);
const router = new VueRouter({ routes });

router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem('token');

  if (token) {
    $axios.defaults.headers["Authorization"] = `Bearer ${token}`;

    try {
      await store.dispatch("user/fetch");
    } catch (error) {
      localStorage.removeItem("token");
    }
    next();
  }
});

export default router;

