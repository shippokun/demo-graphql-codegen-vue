<template>
  <main-component />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import { MainComponent } from '../components';

export default defineComponent({
  name: 'MainContainer',
  components: { MainComponent },
});
</script>
