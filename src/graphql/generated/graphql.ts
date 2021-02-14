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

export type PostInfoFragment = { __typename?: 'Post' } & Pick<
  Post,
  'id' | 'title' | 'content' | 'published' | 'authorId'
>;

export type UserInfoFragment = { __typename?: 'User' } & Pick<
  User,
  'id' | 'name' | 'email'
>;

export type CreateDraftMutationVariables = Exact<{
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  authorEmail: Scalars['String'];
}>;

export type CreateDraftMutation = { __typename?: 'Mutation' } & {
  createDraft?: Maybe<{ __typename?: 'Post' } & PostInfoFragment>;
};

export type DeleteOnePostMutationVariables = Exact<{
  where: PostWhereUniqueInput;
}>;

export type DeleteOnePostMutation = { __typename?: 'Mutation' } & {
  deleteOnePost?: Maybe<{ __typename?: 'Post' } & PostInfoFragment>;
};

export type PublishMutationVariables = Exact<{
  id?: Maybe<Scalars['Int']>;
}>;

export type PublishMutation = { __typename?: 'Mutation' } & {
  publish?: Maybe<{ __typename?: 'Post' } & PostInfoFragment>;
};

export type SignupUserMutationVariables = Exact<{
  data: UserCreateInput;
}>;

export type SignupUserMutation = { __typename?: 'Mutation' } & {
  signupUser: { __typename?: 'User' } & {
    posts: Array<{ __typename?: 'Post' } & PostInfoFragment>;
  } & UserInfoFragment;
};

export type FeedQueryVariables = Exact<{ [key: string]: never }>;

export type FeedQuery = { __typename?: 'Query' } & {
  feed?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Post' } & {
          author?: Maybe<{ __typename?: 'User' } & UserInfoFragment>;
        } & PostInfoFragment
      >
    >
  >;
};

export type FilterPostsQueryVariables = Exact<{
  searchString?: Maybe<Scalars['String']>;
}>;

export type FilterPostsQuery = { __typename?: 'Query' } & {
  filterPosts?: Maybe<Array<Maybe<{ __typename?: 'Post' } & PostInfoFragment>>>;
};

export type PostQueryVariables = Exact<{
  where: PostWhereUniqueInput;
}>;

export type PostQuery = { __typename?: 'Query' } & {
  post?: Maybe<{ __typename?: 'Post' } & PostInfoFragment>;
};

export const PostInfoFragmentDoc = gql`
  fragment PostInfo on Post {
    id
    title
    content
    published
    authorId
  }
`;
export const UserInfoFragmentDoc = gql`
  fragment UserInfo on User {
    id
    name
    email
  }
`;
export const CreateDraftDocument = gql`
  mutation createDraft(
    $title: String!
    $content: String
    $authorEmail: String!
  ) {
    createDraft(title: $title, content: $content, authorEmail: $authorEmail) {
      ...PostInfo
    }
  }
  ${PostInfoFragmentDoc}
`;

/**
 * __useCreateDraftMutation__
 *
 * To run a mutation, you first call `useCreateDraftMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateDraftMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateDraftMutation({
 *   variables: {
 *     title: // value for 'title'
 *     content: // value for 'content'
 *     authorEmail: // value for 'authorEmail'
 *   },
 * });
 */
export function useCreateDraftMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        CreateDraftMutation,
        CreateDraftMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          CreateDraftMutation,
          CreateDraftMutationVariables
        >
      >,
) {
  return VueApolloComposable.useMutation<
    CreateDraftMutation,
    CreateDraftMutationVariables
  >(CreateDraftDocument, options);
}
export type CreateDraftMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  CreateDraftMutation,
  CreateDraftMutationVariables
>;
export const DeleteOnePostDocument = gql`
  mutation deleteOnePost($where: PostWhereUniqueInput!) {
    deleteOnePost(where: $where) {
      ...PostInfo
    }
  }
  ${PostInfoFragmentDoc}
`;

/**
 * __useDeleteOnePostMutation__
 *
 * To run a mutation, you first call `useDeleteOnePostMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOnePostMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteOnePostMutation({
 *   variables: {
 *     where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOnePostMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        DeleteOnePostMutation,
        DeleteOnePostMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          DeleteOnePostMutation,
          DeleteOnePostMutationVariables
        >
      >,
) {
  return VueApolloComposable.useMutation<
    DeleteOnePostMutation,
    DeleteOnePostMutationVariables
  >(DeleteOnePostDocument, options);
}
export type DeleteOnePostMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  DeleteOnePostMutation,
  DeleteOnePostMutationVariables
>;
export const PublishDocument = gql`
  mutation publish($id: Int) {
    publish(id: $id) {
      ...PostInfo
    }
  }
  ${PostInfoFragmentDoc}
`;

/**
 * __usePublishMutation__
 *
 * To run a mutation, you first call `usePublishMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `usePublishMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = usePublishMutation({
 *   variables: {
 *     id: // value for 'id'
 *   },
 * });
 */
export function usePublishMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        PublishMutation,
        PublishMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          PublishMutation,
          PublishMutationVariables
        >
      > = {},
) {
  return VueApolloComposable.useMutation<
    PublishMutation,
    PublishMutationVariables
  >(PublishDocument, options);
}
export type PublishMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  PublishMutation,
  PublishMutationVariables
>;
export const SignupUserDocument = gql`
  mutation signupUser($data: UserCreateInput!) {
    signupUser(data: $data) {
      ...UserInfo
      posts {
        ...PostInfo
      }
    }
  }
  ${UserInfoFragmentDoc}
  ${PostInfoFragmentDoc}
`;

/**
 * __useSignupUserMutation__
 *
 * To run a mutation, you first call `useSignupUserMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSignupUserMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSignupUserMutation({
 *   variables: {
 *     data: // value for 'data'
 *   },
 * });
 */
export function useSignupUserMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        SignupUserMutation,
        SignupUserMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          SignupUserMutation,
          SignupUserMutationVariables
        >
      >,
) {
  return VueApolloComposable.useMutation<
    SignupUserMutation,
    SignupUserMutationVariables
  >(SignupUserDocument, options);
}
export type SignupUserMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  SignupUserMutation,
  SignupUserMutationVariables
>;
export const FeedDocument = gql`
  query feed {
    feed {
      ...PostInfo
      author {
        ...UserInfo
      }
    }
  }
  ${PostInfoFragmentDoc}
  ${UserInfoFragmentDoc}
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
      ...PostInfo
    }
  }
  ${PostInfoFragmentDoc}
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
      ...PostInfo
    }
  }
  ${PostInfoFragmentDoc}
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
