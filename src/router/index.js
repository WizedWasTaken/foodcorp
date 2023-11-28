import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

/**
 * Array of route objects.
 * @type {Array}
 */
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/stores",
    name: "restauranter",
    component: () => import("../views/StorePage.vue"),
  },
  {
    path: "/menu",
    name: "Menu Kort",
    component: () => import("../views/MenuView.vue"),
  },
  {
    path: "/about",
    name: "Hvem er vi?",
    component: () => import("../views/AboutPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
