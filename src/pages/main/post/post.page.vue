<template>
  <post-container :query="query" />
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from '@vue/composition-api';

import { PostContainer } from './containers';
import { PostWhereUniqueInput } from '@/graphql/generated/graphql';
import { Route } from 'vue-router';

export default defineComponent({
  name: 'PostPage',
  components: {
    PostContainer,
  },
  setup(_, { root }) {
    const updateQuery = (route: Route): PostWhereUniqueInput => {
      return {
        id: Number(route.query['id'] || 1),
      };
    };
    const query = reactive<PostWhereUniqueInput>(updateQuery(root.$route));

    // TODO: updateQueryで統一したい
    watch(
      () => root.$route,
      route => {
        query.id = Number(route.query['id'] || 1);
      },
    );
    return { query };
  },
});
</script>
