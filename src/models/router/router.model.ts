export const RouterPath = {
  MAIN: '/',
  FEED: '/feed',
  POST: '/post',
  FILTER_POSTS: '/filter_posts',
  CREATE_DRAFT: '/create_draft',
} as const;

export interface Routing {
  routingPath: string;
  labelName: string;
}

export type RouterPath = typeof RouterPath[keyof typeof RouterPath];
