<template>
  <div id="app">
    <div v-if="loading">loading...</div>
    <div v-else>
      <p>{{ result }}</p>
      <button @click="toggleEnable">トグル</button>
    </div>
    <main />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api';
import {
  useFeedQuery,
  FeedQuery,
  FeedQueryVariables,
} from '@/graphql/generated/graphql';
import { UseQueryOptions } from '@vue/apollo-composable';
import Main from './main.vue';

export default defineComponent({
  components: {
    Main,
  },
  setup() {
    const feedQueryOptions = reactive<
      UseQueryOptions<FeedQuery, FeedQueryVariables>
    >({
      enabled: false,
    });
    const { onResult, loading, result } = useFeedQuery(feedQueryOptions);
    const toggleEnable = () => {
      feedQueryOptions.enabled = true;
    };
    onResult(() => {
      console.log(result);
    });
    return { result, loading, toggleEnable };
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
