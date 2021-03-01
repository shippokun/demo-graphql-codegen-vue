<template>
  <header-component :routes="routes" />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import { Routing, RouterPath } from '@/models';
import { HeaderComponent } from '../components';

export default defineComponent({
  name: 'HeaderContainer',
  components: {
    HeaderComponent,
  },
  setup() {
    const routes: Routing[] = [
      { routingPath: RouterPath.MAIN, labelName: 'Home' },
      { routingPath: RouterPath.FEED, labelName: 'Feed' },
      { routingPath: RouterPath.POST, labelName: 'Post' },
      {
        routingPath: RouterPath.FILTER_POSTS,
        labelName: 'FilterPosts',
      },
      {
        routingPath: RouterPath.CREATE_DRAFT,
        labelName: 'CreateDraft',
      },
    ];
    return { routes };
  },
});
</script>
