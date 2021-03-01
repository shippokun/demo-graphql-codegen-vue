import {
  PostDocument,
  PostQuery,
  PostQueryVariables,
} from '@/graphql/generated/graphql';
import { useQuery, useResult } from '@vue/apollo-composable';

export const usePostQuery = (variables: PostQueryVariables) => {
  return useQuery<PostQuery, PostQueryVariables>(PostDocument, variables);
};

export const usePost = (variables: PostQueryVariables) => {
  const { result, error, loading, refetch, onError, onResult } = usePostQuery(
    variables,
  );

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

  return { result, loading, post, fetch, onError, onResult } as const;
};
