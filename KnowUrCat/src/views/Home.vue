<template>
    <div class="flex flex-col p-8 ">
    <h1> {{ piksyor }}
</h1>
      <input 
        type="text"
        class="rounded border-2 border-gray-200 w-full"
        placeholder="Search for a cat" 
      />
      
      <div class="flex justify-center gap-3 mt-4">
        <router-link :to="{name: 'byLetterID', params: {letterID}}" v-for="letterID of letters" :key="letter">
          {{ letterID }}
        </router-link>
      </div>
    </div>
    
</template>


<script setup>

import {ref} from "vue";
import { computed, onMounted } from 'vue'
import store from '../store';
import axiosClient from '../axiosClient.js'

const breeds = computed(() => store.state.breeds)
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
const catName = "Asian"
const piksyor = ref([])

onMounted(async () => {
  const response = await axiosClient.get('/cats?name=' + catName)
  console.log(response.data)
  piksyor.value = response.data[0].image_link
})


</script>