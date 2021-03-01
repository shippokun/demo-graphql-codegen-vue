<template>
  <div>
    <h1>FilterPosts</h1>
    <form>
      <input v-model="searchText" type="text" placeholder="キーワード検索" />
      <input type="button" value="送信する" @click="submit" />
      <input type="button" value="入力内容をリセットする" @click="reset" />
    </form>
    <div v-for="post in posts" :key="post.id">
      <p>ID: {{ post.id }}</p>
      <p>Title: {{ post.title }}</p>
      <p>Content: {{ post.content }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from '@vue/composition-api';
import { FilterPostsQuery } from '@/graphql/generated/graphql';

export default defineComponent({
  name: 'FilterPostsComponent',
  props: {
    posts: {
      type: Array as PropType<Pick<FilterPostsQuery, 'filterPosts'>>,
      required: true,
    },
    text: {
      type: String,
      required: false,
      default: '',
    },
  },
  emits: ['search'],
  setup(props, { emit }) {
    const searchText = ref(props.text);

    const submit = () => {
      emit('search', searchText.value);
    };

    const reset = () => {
      searchText.value = '';
    };

    return { props, searchText, submit, reset };
  },
});
</script>
