<template>
  <header class="header-base">
    <ul v-for="route in routes" :key="route.id" class="header-list">
      <li class="header-list-item">
        <router-link
          :to="{ path: route.routingPath }"
          class="header-list-item-link"
        >
          {{ route.labelName }}
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';

import { Routing } from '@/models';

export default defineComponent({
  name: 'HeaderComponent',
  props: {
    routes: {
      type: Array as PropType<Routing[]>,
      require: true,
    },
  },
  setup(props) {
    return { props };
  },
});
</script>

<style scoped>
.header-base {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul {
  list-style: none;
}

.header-list {
  display: inline-block;
}

.header-list-item {
  flex: 1;
}

.header-list-item-link {
  display: block;
  text-align: center;
}
</style>
