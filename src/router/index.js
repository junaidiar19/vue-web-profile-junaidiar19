import { createRouter, createWebHistory } from "vue-router";
import Home from "./../views/Home.vue";
import Project from "./../views/Project.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/project",
    name: "project.index",
    component: Project,
  },
];

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});

export default router;
