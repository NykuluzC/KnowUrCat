import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import breedsList from '../views/breedListComponent.vue'
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/letter/:letterID",
    name: "byLetterID",
    component: breedsList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
