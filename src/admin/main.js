import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Validator from 'simple-vue-validator';

Vue.use(Validator, {mode: 'manual'});

new Vue({
  el: "#app-root",
  Validator,
  router,
  render: h => h(App)
});