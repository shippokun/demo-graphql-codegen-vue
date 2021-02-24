<template>
  <div v-if="loading">loading...</div>
  <div v-else>
    <main-component :result="result" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from '@vue/composition-api';
import { useFeedQuery, FeedQuery } from '@/graphql/generated/graphql';
import { useFeed } from './feed.query';
import { MainComponent } from '../components';

export default defineComponent({
  name: 'MainContainer',
  components: { MainComponent },
  setup() {
    const { loading, fetch } = useFeed(useFeedQuery);
    const result = ref<FeedQuery>({});

    watchEffect(async () => {
      result.value = await fetch();
    });

    return { loading, result };
  },
});
</script>
