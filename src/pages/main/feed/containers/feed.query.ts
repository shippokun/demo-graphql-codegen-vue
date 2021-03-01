import {
  FeedDocument,
  FeedQuery,
  FeedQueryVariables,
} from '@/graphql/generated/graphql';
import { useQuery, useResult } from '@vue/apollo-composable';

export const useFeedQuery = () => {
  return useQuery<FeedQuery, FeedQueryVariables>(FeedDocument);
};

export const useFeed = () => {
  const { result, error, loading, refetch, onError, onResult } = useFeedQuery();

  const feed = useResult(result, null, data => data.feed);

  const fetch = (): Promise<FeedQuery> => {
    if (result.value) {
      refetch();
    }
    return new Promise((resolve, reject) => {
      onResult(() => resolve(result.value));
      onError(() => reject(error.value));
    });
  };

  return { result, loading, feed, fetch, onError, onResult } as const;
};
