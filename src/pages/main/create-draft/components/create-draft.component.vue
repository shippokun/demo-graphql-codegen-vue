<template>
  <div>
    <h1>CreateDraft</h1>
    <form @submit.prevent="submit">
      <p><button type="submit">Create</button></p>
      <table>
        <tbody>
          <tr>
            <td>title</td>
            <td>
              <input v-model="variables.title" type="text" name="title" />
            </td>
            <td>content</td>
            <td>
              <input v-model="variables.content" type="text" name="content" />
            </td>
            <td>authorEmail</td>
            <td>
              <input
                v-model="variables.authorEmail"
                type="text"
                name="authorEmail"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType } from '@vue/composition-api';

import { CreateDraftMutationVariables } from '@/graphql/generated/graphql';

export default defineComponent({
  name: 'CreateDraftComponent',
  emits: ['mutation'],
  props: {
    value: {
      type: Object as PropType<CreateDraftMutationVariables>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const variables = reactive(props.value);

    const submit = () => {
      emit('mutation', variables);
    };

    return { variables, submit };
  },
});
</script>
<style scoped>
table {
  display: inline-block;
}
</style>
