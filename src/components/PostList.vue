<template>
  <div class="post">
    <div class="user-info">
      <a href="#" class="user-name">{{ userById(post.userId).name }}</a>

      <a href="#">
        <img
          class="avatar-large"
          :src="userById(post.userId).avatar"
          alt="avatar" />
      </a>

      <p class="desktop-only text-small">107 posts</p>
    </div>

    <div class="post-content">
      <div>
        <p>
          {{ post.text }}
        </p>
      </div>
    </div>
    <AppDate :timeStamp="post.publishedAt" />
  </div>
</template>

<!-- Script -->
<script>
// imports
import sourceData from "@/utils/constant";

export default {
  name: "PostList",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    post() {
      return this.posts.find((post) => post.id === this.id); // also available under this.$route.params.id
    },
  },
  data() {
    return {
      posts: sourceData.posts,
      users: sourceData.users,
    };
  },
  methods: {
    userById(userId) {
      return this.users.find((u) => u.id === userId);
    },
  },
};
</script>
