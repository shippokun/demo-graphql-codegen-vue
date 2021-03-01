import {
  PostQuery,
  PostQueryVariables,
  usePostQuery,
} from '@/graphql/generated/graphql';
import { useResult } from '@vue/apollo-composable';

export const usePost = (variables: PostQueryVariables) => {
  const context = usePostQuery(variables);
  const { result, error, refetch, onError, onResult } = context;

  const post = useResult(result, null, data => data.post);

  const fetch = (): Promise<PostQuery> => {
    if (result.value) {
      refetch();
    }
    return new Promise((resolve, reject) => {
      onResult(() => resolve(result.value));
      onError(() => reject(error.value));
    });
  };

  return { post, fetch, ...context } as const;
};
