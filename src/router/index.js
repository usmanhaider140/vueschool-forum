import { createRouter, createWebHistory } from "vue-router";

// Page Components
import HomeVue from "@/pages/Home.vue";
import ThreadVue from "@/pages/Thread.vue";
import NotFoundVue from "@/pages/NotFound.vue";

// Mock Data
import sourceData from "@/utils/constant";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeVue,
  },
  {
    path: "/thread/:id",
    name: "ThreadShow",
    component: ThreadVue,
    props: true,
    beforeEnter(to, from, next) {
      // Check if thread exists
      const exists = sourceData.threads.find(
        thread => thread.id === to.params.id,
      );
      if (!exists) {
        next({
          name: "NotFound",
          params: { pathMatch: to.path.substring(1).split("/") },
          // Preserve existing query and hash
          query: to.query,
          hash: to.hash,
        });
      } else {
        next();
      }
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFoundVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
