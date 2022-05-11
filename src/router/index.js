import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    beforeEnter: () => {
      let auth = false;
      if (auth) {
        return;
      } else {
        console.log("not logged in");
      }
    },
  },
  {
    path: "/history",
    name: "HistoryPage",
    component: () => import("@/views/HistoryPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
