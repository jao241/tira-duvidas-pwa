import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/HomeView.vue";
import CriarSala from "../views/CriarSalaView.vue";
import Sala from "../views/SalaView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/criar",
    name: "CriarSala",
    component: CriarSala,
  },
  {
    path: "/sala",
    name: "Sala",
    component: Sala,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
