import Vue from 'vue';
import { provide } from '@vue/composition-api';
import { DefaultApolloClient } from '@vue/apollo-composable';

import App from './App.vue';
import store from './store';
import { apolloClient } from './plugins';

Vue.config.productionTip = false;

new Vue({
  store,
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: h => h(App),
}).$mount('#app');
