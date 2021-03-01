import {
  CreateDraftMutation,
  CreateDraftMutationVariables,
  useCreateDraftMutation,
} from '@/graphql/generated/graphql';

export const useCreateDraft = (
  initVariables?: CreateDraftMutationVariables,
) => {
  const context = useCreateDraftMutation({ variables: initVariables });
  const { mutate, error, onDone, onError } = context;

  const create = (
    variables?: CreateDraftMutationVariables,
  ): Promise<CreateDraftMutation | null | undefined> => {
    mutate(variables);
    return new Promise((resolve, reject) => {
      onDone(result => resolve(result.data));
      onError(() => reject(error.value));
    });
  };

  return { create, ...context } as const;
};
