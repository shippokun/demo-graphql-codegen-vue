<template>
  <div v-if="loading">loading...</div>
  <div v-else>
    <post-component :post="post" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';

import { PostComponent } from '../components';
import { usePost } from './post.query';
import { PostWhereUniqueInput } from '@/graphql/generated/graphql';

export default defineComponent({
  name: 'PostContainer',
  components: {
    PostComponent,
  },
  props: {
    query: {
      type: Object as PropType<PostWhereUniqueInput>,
      required: true,
    },
  },
  setup(props) {
    const { loading, result, post } = usePost({ where: props.query });

    return { loading, result, post };
  },
});
</script>
