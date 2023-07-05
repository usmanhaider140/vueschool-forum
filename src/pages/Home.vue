<template>
  <h1>Welcome to the Forum</h1>
  <ThreadList :threads="threads" />
</template>

<!-- Script -->
<script>
import sourceData from "@/utils/constant";

import ThreadList from "@/components/ThreadList.vue";

export default {
  name: "PageHome",
  components: {
    ThreadList,
  },
  data() {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users,
    };
  },
  methods: {
    postById(postId) {
      return this.posts.find((post) => post.id === postId);
    },
    userById(userId) {
      return this.users.find((u) => u.id === userId);
    },
  },
};
</script>
<style scoped></style>
