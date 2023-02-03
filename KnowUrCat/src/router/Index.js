import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from '../components/DefaultLayout.vue';
import Home from '../views/Home.vue'
import NameSearch from '../views/NameSearch.vue'
import OriginSearch from '../views/OriginSearch.vue'
import RandomSearch from '../views/RandomSearch.vue'
import FilterSearch from '../views/FilterSearch.vue'
import breedListComponent from '../views/breedListComponent.vue'
import CatDetails from '../views/CatDetails.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      
      {
        path: "/thru-Filter/:filterID?",
        name: "Filter",
        component: FilterSearch,
      },
      {
        path: "/thru-Origin/:originID?",
        name: "Origin",
        component: OriginSearch,
      },
      {
        path: "/thru-Random/:randomID?",
        name: "Random",
        component: RandomSearch,
      },
      {
        path: "/thru-Name/:name?",
        name: "Name",
        component: NameSearch,
      },
      {
        path: "/letter/:letterID?",
        name: "byLetterID",
        component: breedListComponent,
      },
      {
        path: '/cats/:id',
        name: 'catDetails',
        component: CatDetails
      },
    ]
  },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
