import 'bootstrap/dist/css/bootstrap.min.css'

import Vue from 'vue'
import App from './App.vue'

import router from "./router";

// Import and register Bootstrap Vue components
import "bootstrap-vue/dist/bootstrap-vue.css";
import BootstrapVue from "bootstrap-vue";

import VueScrollTo from "vue-scrollto"

Vue.use(BootstrapVue);
// Vue.use(VueScrollTo)
Vue.use(VueScrollTo, {
  container: "body",
  duration: 3000,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

// import "mapbox-gl/dist/mapbox-gl.css";

// Import custom SCSS
// (after Bootstrap Vue in order to allow for overrides)
import "@/assets/scss/style.scss";


// Import and register Font Awesome Vue components
import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon";
Vue.component("icon", Icon);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')