<template>
  <div>
    <h1>Feed</h1>
    <div v-for="item in feed" :key="item.id">
      <p>ID: {{ item.id }}</p>
      <p>Title: {{ item.title }}</p>
      <p>Content: {{ item.content }}</p>
      <p>Published: {{ item.published }}</p>
      <p>AuthorName: {{ item.author.name }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import { FeedQuery } from '@/graphql/generated/graphql';
export default defineComponent({
  name: 'FeedComponent',
  props: {
    feed: {
      type: Array as PropType<Pick<FeedQuery, 'feed'>>,
      require: true,
    },
  },
  setup(props) {
    return { props };
  },
});
</script>
