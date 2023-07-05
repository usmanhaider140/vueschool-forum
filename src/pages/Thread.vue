<!-- Script  -->
<script>
// Imports
import sourceData from "@/utils/constant";
import PostList from "@/components/PostList";
import PostEditor from "@/components/PostEditor.vue";
export default {
  name: "PageThread",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  components: {
    PostList,
    PostEditor,
  },
  computed: {
    thread() {
      return this.threads.find((thread) => thread.id === this.id); // also available under this.$route.params.id
    },
  },
  methods: {
    addPost(eventData) {
      const { newPost } = eventData;
      sourceData.posts.push({ ...newPost, threadId: this.id });
      this.thread.posts.push(newPost.id);
    },
  },
  data() {
    return {
      threads: sourceData.threads,
    };
  },
};
</script>

<!-- View -->

<template>
  <div v-if="thread" class="container">
    <div class="col-large push-top">
      <h1>{{ thread.title }}</h1>
      <div class="post-list" v-for="postId in thread.posts" :key="postId">
        <PostList :id="postId" />
      </div>
      <PostEditor @save="addPost" />
    </div>
  </div>
</template>
