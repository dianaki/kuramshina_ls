import Vue from 'vue';
import App from './App.vue';
import router from './router/routes';
import Validator from 'simple-vue-validator';
import store from "./store";
import $axios from "./requests";

Vue.use(Validator, {mode: 'manual'});

store.$axios = $axios;

new Vue({
  el: "#app-root",
  Validator,
  router,
  store,
  render: h => h(App)
});