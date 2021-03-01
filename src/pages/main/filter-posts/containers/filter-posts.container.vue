<template>
  <div v-if="loading">loading...</div>
  <div v-else>
    <filter-posts-component
      :text="text.searchString"
      :posts="filterPosts"
      @search="search"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import { FilterPostsComponent } from '../components';
import { useFilterPosts } from './filter-posts.query';
import { FilterPostsQueryVariables } from '@/graphql/generated/graphql';

export default defineComponent({
  name: 'FilterPostsContainer',
  components: {
    FilterPostsComponent,
  },
  setup() {
    const text: FilterPostsQueryVariables = { searchString: '' };
    const { loading, result, filterPosts, fetch } = useFilterPosts(text);

    // TODO: ここは検索条件をqueryとして残したいので、page componentへ伝搬する
    const search = async (value: string) => {
      text.searchString = value;
      await fetch(text);
    };

    return { loading, text, search, result, filterPosts };
  },
});
</script>
