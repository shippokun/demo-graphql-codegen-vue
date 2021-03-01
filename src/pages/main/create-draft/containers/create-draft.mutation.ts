import {
  CreateDraftMutation,
  CreateDraftMutationVariables,
  useCreateDraftMutation,
} from '@/graphql/generated/graphql';

export const useCreateDraft = (
  initVariables?: CreateDraftMutationVariables,
) => {
  const {
    mutate,
    loading,
    error,
    called,
    onDone,
    onError,
  } = useCreateDraftMutation({ variables: initVariables });

  const create = (
    variables?: CreateDraftMutationVariables,
  ): Promise<CreateDraftMutation | null | undefined> => {
    mutate(variables);
    return new Promise((resolve, reject) => {
      onDone(result => resolve(result.data));
      onError(() => reject(error.value));
    });
  };

  return { loading, called, create, onError } as const;
};
