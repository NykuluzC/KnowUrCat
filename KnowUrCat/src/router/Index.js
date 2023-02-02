import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import NameSearch from '../views/NameSearch.vue'
import FilterSearch from '../views/FilterSearch.vue'
import OriginSearch from '../views/OriginSearch.vue'
import RandomSearch from '../views/RandomSearch.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/thru-Name/:nameID",
    name: "thruName",
    component: NameSearch,
  },
  {
    path: "/thru-Filter/:letterID",
    name: "thruFilter",
    component: FilterSearch,
  },
  {
    path: "/thru-Origin/:originID",
    name: "thruOrigin",
    component: OriginSearch,
  },
  {
    path: "/thru-Random/:randomID",
    name: "thruRandom",
    component: RandomSearch,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
