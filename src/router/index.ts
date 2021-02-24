import { Main } from '@/pages';
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '',
    component: Main,
  },
];

export const router = new VueRouter({
  routes,
  mode: 'history',
});
