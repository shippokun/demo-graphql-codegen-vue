<template>
  <div v-if="loading">loading...</div>
  <div v-else>
    <main-component :result="result" />
    <button @click="onFetch">ボタン</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useFeed } from './feed.query';
import { MainComponent } from '../components';

export default defineComponent({
  name: 'MainContainer',
  components: { MainComponent },
  setup() {
    const { loading, fetch, result } = useFeed();

    const onFetch = () => {
      fetch();
    };

    return { result, loading, onFetch };
  },
});
</script>
