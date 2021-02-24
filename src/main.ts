import { DefaultApolloClient } from '@vue/apollo-composable';
import { provide } from '@vue/composition-api';
import Vue from 'vue';
import App from './App.vue';
import { apolloClient } from './plugins';
import { router } from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: h => h(App),
}).$mount('#app');
