<template>
  <div class="col-full">
    <div class="thread-list">
      <h2 class="list-title">Threads</h2>

      <div class="thread" v-for="thread in threads" :key="thread.id">
        <div>
          <p>
            <router-link
              :to="{
                name: 'ThreadShow',
                params: { id: thread.id },
              }"
              >{{ thread.title }}</router-link
            >
          </p>
          <p class="text-faded text-xsmall">
            By <a href="#">{{ userById(thread.userId).name }}</a
            >, <AppDate :timeStamp="thread.publishedAt" />
          </p>
        </div>

        <div class="activity">
          <p class="replies-count">{{ thread.posts.length }} reply</p>

          <img
            class="avatar-medium"
            :src="userById(thread.userId).avatar"
            alt="" />

          <div>
            <p class="text-xsmall">
              <a href="#">{{ userById(thread.userId).name }}</a>
            </p>
            <p class="text-xsmall text-faded">
              <AppDate :timeStamp="thread.publishedAt" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Script -->
<script>
import sourceData from "@/utils/constant";

export default {
  name: "ThreadList",
  props: {
    threads: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
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
