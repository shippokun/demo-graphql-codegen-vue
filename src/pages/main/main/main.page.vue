<template>
  <main-container />
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import { MainContainer } from './containers';

export default defineComponent({
  name: 'MainPage',
  components: {
    MainContainer,
  },
  setup() {
    // ここで query の処理などする
    // const query = reactive({ search: '' })
    // watch(() => root.$route, route => {
    //   query.search = String(route.query['search'] | '')
    // })
    // return { query }
  },
});
</script>
