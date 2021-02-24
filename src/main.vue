<template>
  <div>{{ title }}</div>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api';
export default defineComponent({
  name: 'Main',
  setup() {
    const title = ref('Home');

    return { title };
  },
});
</script>

<style></style>
