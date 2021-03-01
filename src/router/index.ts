import { RouterPath } from '@/models';
import { CreateDraft, Feed, FilterPosts, Main, Post } from '@/pages';
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: RouterPath.MAIN,
    component: Main,
  },
  {
    path: RouterPath.FEED,
    component: Feed,
  },
  {
    path: RouterPath.POST,
    component: Post,
  },
  {
    path: RouterPath.FILTER_POSTS,
    component: FilterPosts,
  },
  {
    path: RouterPath.CREATE_DRAFT,
    component: CreateDraft,
  },
];

export const router = new VueRouter({
  routes,
  mode: 'history',
});
