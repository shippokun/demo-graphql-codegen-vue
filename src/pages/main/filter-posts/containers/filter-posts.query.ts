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
  const {
    result,
    error,
    loading,
    load,
    refetch,
    onError,
    onResult,
  } = useFilterPostsQuery(variables);

  const filterPosts = useResult(result, null, data => data.filterPosts);

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

  return {
    result,
    loading,
    filterPosts,
    fetch,
    onError,
    onResult,
  } as const;
};
