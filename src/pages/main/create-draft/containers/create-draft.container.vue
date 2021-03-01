<template>
  <div v-if="loading">loading...</div>
  <div v-else>
    <create-draft-component :value="initVariables" @mutation="mutation" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api';

import { CreateDraftComponent } from '../components';
import { useCreateDraft } from './create-draft.mutation';
import { CreateDraftMutationVariables } from '@/graphql/generated/graphql';
import { RouterPath } from '@/models';

// import { useGlobalMutationLoading } from '@vue/apollo-composable';

export default defineComponent({
  name: 'CreateDraftContainer',
  components: {
    CreateDraftComponent,
  },
  setup(_, { root }) {
    const initVariables = reactive<CreateDraftMutationVariables>({
      title: '',
      content: '',
      authorEmail: '',
    });
    const { fetch, loading } = useCreateDraft(initVariables);
    const mutation = async (variables: CreateDraftMutationVariables) => {
      await fetch(variables).then(res => {
        console.log(res);
        root.$router.push({
          path: `${RouterPath.POST}?id=${res?.createDraft?.id}`,
        });
      });
    };

    return { mutation, loading, initVariables };
  },
});
</script>
