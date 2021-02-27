import {
  FeedDocument,
  FeedQuery,
  FeedQueryVariables,
} from '@/graphql/generated/graphql';
import { useLazyQuery, useResult } from '@vue/apollo-composable';

export const useFeedLazyQuery = (variables?: FeedQueryVariables) => {
  return useLazyQuery<FeedQuery>(FeedDocument, variables);
};

export const useFeed = (variables?: FeedQueryVariables) => {
  const {
    result,
    error,
    loading,
    load,
    refetch,
    onError,
    onResult,
  } = useFeedLazyQuery(variables);

  const feed = useResult(result, null, data => data.feed);

  const fetch = (variables?: FeedQueryVariables): Promise<FeedQuery> => {
    if (result.value) {
      refetch(variables);
    } else {
      load(undefined, variables);
    }
    return new Promise((resolve, reject) => {
      onResult(() => resolve(result.value));
      onError(() => reject(error.value));
    });
  };

  return { loading, fetch, result, feed, onResult, onError } as const;
};
