<template>
  <div v-if="loading">loading...</div>
  <div v-else>
    <create-draft-component :value="initVariables" @mutation="mutation" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import { CreateDraftComponent } from '../components';
import { useCreateDraft, initVariables } from './create-draft.mutation';
import { CreateDraftMutationVariables } from '@/graphql/generated/graphql';
import { RouterPath } from '@/models';

export default defineComponent({
  name: 'CreateDraftContainer',
  components: {
    CreateDraftComponent,
  },
  setup(_, { root }) {
    const { create, loading } = useCreateDraft();

    const mutation = async (variables: CreateDraftMutationVariables) => {
      await create(variables).then(res => {
        root.$router.push({
          path: `${RouterPath.POST}?id=${res?.createDraft?.id}`,
        });
      });
    };

    return { mutation, loading, initVariables };
  },
});
</script>
