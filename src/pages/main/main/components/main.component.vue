<template>
  <div>
    <h1>Vue x GraphQL x Codegen Sample Component</h1>
    <p>Feed: Query</p>
    <p>Post: Query with value</p>
    <p>FilterPosts: LazyQuery with value</p>
    <p>CreateDraft: Mutation</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'MainComponent',
});
</script>
