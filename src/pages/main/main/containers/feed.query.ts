import {
  FeedQuery,
  FeedQueryVariables,
  useFeedQuery,
} from '@/graphql/generated/graphql';
import { UseQueryOptions } from '@vue/apollo-composable';
import { ref } from '@vue/composition-api';

export const useFeed = (query: typeof useFeedQuery) => {
  const initState = ref<FeedQuery>({});
  const options = ref<UseQueryOptions<FeedQuery, FeedQueryVariables>>({
    enabled: false,
  });
  const { result, error, loading } = query(options);

  const fetch = (): Promise<FeedQuery> => {
    options.value.enabled = true;
    return new Promise((resolve, reject) => {
      if (loading.value) {
        // ループ
      } else {
        if (error.value) {
          reject(error);
        } else {
          resolve(result.value);
        }
      }
    });
  };

  return { loading, fetch, result, initState };
};
