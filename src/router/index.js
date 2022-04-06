import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/News.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
