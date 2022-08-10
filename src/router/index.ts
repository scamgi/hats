import RandomHatView from "@/views/RandomHatView.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MakeSessionView from "../views/MakeSessionView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
/*     {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
 */  
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/random-hat",
      name: "random-hat",
      component: RandomHatView
    },
    {
      path: "/make-session",
      name: "make-session",
      component: MakeSessionView
    },],
});

export default router;
