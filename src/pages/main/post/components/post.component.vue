<template>
  <div>
    <h1>Post</h1>
    <p>ID: {{ post.id }}</p>
    <p>Title: {{ post.title }}</p>
    <p>Content: {{ post.content }}</p>
    <p>Published: {{ post.published }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';

import { PostQuery } from '@/graphql/generated/graphql';
export default defineComponent({
  name: 'PostComponent',
  props: {
    post: {
      type: Object as PropType<Pick<PostQuery, 'post'>>,
      required: true,
    },
  },
  setup(props) {
    return { props };
  },
});
</script>
