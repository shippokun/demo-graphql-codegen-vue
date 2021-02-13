import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from '@vue/composition-api';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  post?: Maybe<Post>;
  feed?: Maybe<Array<Maybe<Post>>>;
  filterPosts?: Maybe<Array<Maybe<Post>>>;
};

export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};

export type QueryFilterPostsArgs = {
  searchString?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  signupUser: User;
  deleteOnePost?: Maybe<Post>;
  createDraft?: Maybe<Post>;
  publish?: Maybe<Post>;
};

export type MutationSignupUserArgs = {
  data: UserCreateInput;
};

export type MutationDeleteOnePostArgs = {
  where: PostWhereUniqueInput;
};

export type MutationCreateDraftArgs = {
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  authorEmail: Scalars['String'];
};

export type MutationPublishArgs = {
  id?: Maybe<Scalars['Int']>;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['Int'];
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  published: Scalars['Boolean'];
  author?: Maybe<User>;
  authorId?: Maybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  posts: Array<Post>;
};

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type UserCreateInput = {
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<PostCreateNestedManyWithoutAuthorInput>;
};

export type PostCreateNestedManyWithoutAuthorInput = {
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutauthorInput>>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
};

export type PostCreateWithoutAuthorInput = {
  content?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
};

export type PostCreateOrConnectWithoutauthorInput = {
  where: PostWhereUniqueInput;
  create: PostCreateWithoutAuthorInput;
};

export type FeedQueryVariables = Exact<{ [key: string]: never }>;

export type FeedQuery = { __typename?: 'Query' } & {
  feed?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Post' } & Pick<
          Post,
          'id' | 'title' | 'content' | 'published' | 'authorId'
        > & {
            author?: Maybe<{ __typename?: 'User' } & Pick<User, 'id' | 'name'>>;
          }
      >
    >
  >;
};

export type FilterPostsQueryVariables = Exact<{
  searchString?: Maybe<Scalars['String']>;
}>;

export type FilterPostsQuery = { __typename?: 'Query' } & {
  filterPosts?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Post' } & Pick<
          Post,
          'id' | 'title' | 'content' | 'published' | 'authorId'
        > & {
            author?: Maybe<
              { __typename?: 'User' } & Pick<User, 'id' | 'name' | 'email'>
            >;
          }
      >
    >
  >;
};

export type PostQueryVariables = Exact<{
  where: PostWhereUniqueInput;
}>;

export type PostQuery = { __typename?: 'Query' } & {
  post?: Maybe<
    { __typename?: 'Post' } & Pick<
      Post,
      'id' | 'title' | 'content' | 'published' | 'authorId'
    > & {
        author?: Maybe<
          { __typename?: 'User' } & Pick<User, 'id' | 'name' | 'email'>
        >;
      }
  >;
};

export const FeedDocument = gql`
  query feed {
    feed {
      id
      title
      content
      published
      author {
        id
        name
      }
      authorId
    }
  }
`;

/**
 * __useFeedQuery__
 *
 * To run a query within a Vue component, call `useFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeedQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useFeedQuery();
 */
export function useFeedQuery(
  options:
    | VueApolloComposable.UseQueryOptions<FeedQuery, FeedQueryVariables>
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<FeedQuery, FeedQueryVariables>
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<FeedQuery, FeedQueryVariables>
      > = {},
) {
  return VueApolloComposable.useQuery<FeedQuery, FeedQueryVariables>(
    FeedDocument,
    {},
    options,
  );
}
export type FeedQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  FeedQuery,
  FeedQueryVariables
>;
export const FilterPostsDocument = gql`
  query filterPosts($searchString: String) {
    filterPosts(searchString: $searchString) {
      id
      title
      content
      published
      author {
        id
        name
        email
      }
      authorId
    }
  }
`;

/**
 * __useFilterPostsQuery__
 *
 * To run a query within a Vue component, call `useFilterPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilterPostsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useFilterPostsQuery({
 *   searchString: // value for 'searchString'
 * });
 */
export function useFilterPostsQuery(
  variables:
    | FilterPostsQueryVariables
    | VueCompositionApi.Ref<FilterPostsQueryVariables>
    | ReactiveFunction<FilterPostsQueryVariables> = {},
  options:
    | VueApolloComposable.UseQueryOptions<
        FilterPostsQuery,
        FilterPostsQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          FilterPostsQuery,
          FilterPostsQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          FilterPostsQuery,
          FilterPostsQueryVariables
        >
      > = {},
) {
  return VueApolloComposable.useQuery<
    FilterPostsQuery,
    FilterPostsQueryVariables
  >(FilterPostsDocument, variables, options);
}
export type FilterPostsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  FilterPostsQuery,
  FilterPostsQueryVariables
>;
export const PostDocument = gql`
  query post($where: PostWhereUniqueInput!) {
    post(where: $where) {
      id
      title
      content
      published
      author {
        id
        name
        email
      }
      authorId
    }
  }
`;

/**
 * __usePostQuery__
 *
 * To run a query within a Vue component, call `usePostQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = usePostQuery({
 *   where: // value for 'where'
 * });
 */
export function usePostQuery(
  variables:
    | PostQueryVariables
    | VueCompositionApi.Ref<PostQueryVariables>
    | ReactiveFunction<PostQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<PostQuery, PostQueryVariables>
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<PostQuery, PostQueryVariables>
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<PostQuery, PostQueryVariables>
      > = {},
) {
  return VueApolloComposable.useQuery<PostQuery, PostQueryVariables>(
    PostDocument,
    variables,
    options,
  );
}
export type PostQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  PostQuery,
  PostQueryVariables
>;
