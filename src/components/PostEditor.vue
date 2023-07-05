<template>
  <div class="col-full">
    <form @submit="save">
      <div class="form-group">
        <textarea
          v-model="text"
          name=""
          id=""
          cols="30"
          rows="10"
          class="form-input" />
      </div>
      <div class="form-actions">
        <button class="btn-blue">Submit Post</button>
      </div>
    </form>
  </div>
</template>
<script>
import sourceData from "@/utils/constant";

export default {
  methods: {
    save(e) {
      e.preventDefault();

      const newPost = {
        id: Math.random().toString(36).substr(2, 9),
        threadId: this.id,
        userId: "38St7Q8Zi2N1SPa5ahzssq9kbyp1",
        publishedAt: Math.floor(Date.now() / 1000),
        text: this.text,
      };

      this.$emit("save", { newPost });
      //   sourceData.posts.push(newPost);
      //   this.thread.posts.push(newPost.id);
      this.text = "";
    },
  },
  data() {
    return {
      threads: sourceData.threads,
      text: "",
    };
  },
};
</script>
<style lang=""></style>
