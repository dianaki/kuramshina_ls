import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import routes from "./routes";
import axios from "axios";

Vue.use(VueRouter);

const router = new VueRouter({ routes });

const guard = axios.create({
  baseURL: "https://webdev-api.loftschool.com/"
});

router.beforeEach(async (to, from, next) => {
  const isPublicRoute = to.matched.some(route => route.meta.public);
	const isUserLoggedIn = store.getters["user/userIsLoggedIn"];

  if (isPublicRoute === false && isUserLoggedIn === false) {
		const token = localStorage.getItem("token");

    guard.defaults.headers["Authorization"] = `Bearer ${token}`;

    try {
      const response = await guard.get("/user"); 
      store.dispatch("user/login", await response.data.user)
      next();
    } catch (error) {
      router.replace("/");
      localStorage.removeItem("token"); 
    }
  } else {
    next();
  }
});

export default router;

