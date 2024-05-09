import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../Views/HomeView.vue";

console.log(`Router initializing`);

const router = createRouter({  
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView
    },
    {
      path: "/SomeView",
      name: "SomeView",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../Views/SomeView.vue")
    },
    {
      path: "/AnotherView",
      name: "AnotherView",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../Views/AnotherView.vue")
    }
  ]
});

export default router;