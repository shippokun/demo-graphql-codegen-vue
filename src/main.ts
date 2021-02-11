import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { apolloProvider } from "./plugins";

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
  apolloProvider,
}).$mount("#app");
