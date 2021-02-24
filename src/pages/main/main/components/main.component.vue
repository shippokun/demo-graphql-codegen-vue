<template>
  <div>{{ result }}</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import { FeedQuery } from '@/graphql/generated/graphql';
export default defineComponent({
  name: 'MainComponent',
  props: {
    result: {
      type: Object as PropType<FeedQuery>,
      require: true,
    },
  },
  setup(props) {
    return { props };
  },
});
</script>

<style></style>
