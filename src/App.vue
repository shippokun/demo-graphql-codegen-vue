<template>
  <div id="app">
    <div v-if="loading">loading...</div>
    <div v-else>{{ result.feed[0] }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useFeedQuery } from '@/graphql/generated/graphql';

export default defineComponent({
  setup() {
    const { result, loading } = useFeedQuery();
    return { result, loading };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
