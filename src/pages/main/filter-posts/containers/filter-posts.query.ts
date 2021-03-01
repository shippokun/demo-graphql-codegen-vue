import {
  FilterPostsDocument,
  FilterPostsQuery,
  FilterPostsQueryVariables,
} from '@/graphql/generated/graphql';
import { useLazyQuery, useResult } from '@vue/apollo-composable';

export const useFilterPostsQuery = (variables: FilterPostsQueryVariables) => {
  return useLazyQuery<FilterPostsQuery, FilterPostsQueryVariables>(
    FilterPostsDocument,
    variables,
  );
};

export const useFilterPosts = (
  variables: FilterPostsQueryVariables = { searchString: '' },
) => {
  const context = useFilterPostsQuery(variables);
  const { result, error, load, refetch, onError, onResult } = context;

  const filterPosts = useResult(result, [{}], data => data.filterPosts);

  const fetch = (
    fetchVariables: FilterPostsQueryVariables,
  ): Promise<FilterPostsQuery> => {
    if (result.value) {
      refetch(fetchVariables);
    } else {
      load(undefined, fetchVariables);
    }
    return new Promise((resolve, reject) => {
      onResult(() => resolve(result.value));
      onError(() => reject(error.value));
    });
  };

  return { fetch, filterPosts, ...context } as const;
};
