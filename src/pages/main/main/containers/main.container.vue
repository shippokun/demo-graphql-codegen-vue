<template>
  <div v-if="loading">loading...</div>
  <div v-else>
    <main-component :result="result" />
  </div>
</template>

<script lang="ts">
import { defineComponent, watchEffect, ref } from '@vue/composition-api';
import { useFeedQuery } from '@/graphql/generated/graphql';
import { useFeed } from './feed.query';
import { MainComponent } from '../components';

export default defineComponent({
  name: 'MainContainer',
  components: { MainComponent },
  setup() {
    const { loading, fetch, initState } = useFeed(useFeedQuery);

    const result = ref(initState);

    watchEffect(async () => {
      result.value = await fetch();
    });

    return { loading, result };
  },
});
</script>
