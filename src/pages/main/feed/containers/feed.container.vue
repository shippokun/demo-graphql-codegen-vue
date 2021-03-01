<template>
  <div v-if="loading">loading...</div>
  <div v-else>
    <feed-component :feed="feed" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useFeed } from './feed.query';
import { FeedComponent } from '../components';

export default defineComponent({
  name: 'FeedContainer',
  components: { FeedComponent },
  setup() {
    const { loading, result, feed } = useFeed();

    return { result, loading, feed };
  },
});
</script>
