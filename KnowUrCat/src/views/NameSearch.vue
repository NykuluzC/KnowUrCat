<template>
    <div class="p-8 pb-0 pt-2">
        <input
            type="text"
            v-model="keyword"
            class="rounded border-10 border-gray-200 w-full pt-4"
            placeholder="Search for a cat breed and know all about it!"
            @change="searchCats"
          />            
        <button @click="showResult=true" class="bg-white px-4s py-2 h-10 rounded border-10 font-extrabold border move-center flex justify-center hover:bg-red-600 w-60 ">Search</button> 

    </div>

    <div v-if="showResult" class="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
        <div v-for="cat of cats" :key="cat.name" class="bg-white shadow-md rounded-2xl">
           
            <router-link :to="{name: 'catDetails', params: {id: cat.name}}">
                <img :src="cat.image_link" :alt="name" class="rounded-t-xl h-29 img-responsive  image-resize w-full object-cover cl">
            </router-link>
            
            <div class="px-3">
            <div class="font-bold font-size 3x">
                <h3>Breed Name: {{ cat.name }}</h3>
                <h3>Origin: {{ cat.origin }}</h3>
            </div>

            <p class="px-4 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus consectetur facilis ut rem eum labore fugit tempora vel minima quam id numquam delectus asperiores molestias architecto corporis sed, eligendi maxime!</p>
            
            <div class="px-0 py-5 rounded">
                <router-link to="/" class="ChooseMe rounded-md">More about our family button 😼
                </router-link>
            </div>
            </div>
        </div>
    </div>
    </template>
    
    <style>
    

    .ChooseMe {
        border: black 3px solid;
        background-color: rgb(221, 197, 16);
    }
    img {
       
        border: solid;
        object-fit: none;
        border-color: brown;
    }
    .image-resize {
        width: 700px;
        height: 500px; 
    }

    
    </style>
   
    <script setup>
    import { computed } from '@vue/reactivity';
    import { onMounted, ref } from 'vue';
    import axiosClient from '../axiosClient';
    import store from '../store';
    import { useRoute } from "vue-router";

    const route = useRoute();
    var showResult = ref(false);
    const keyword = ref('');
    const cats = computed(() => store.state.searchedCats)
    console.log(cats[0])

    function searchCats() {
       store.dispatch('searchCats', keyword.value)
    }

    onMounted(() => {
        keyword.value = route.params.name
        if (keyword.value) {
            searchCats()
            showResult = true
        }
    })
    </script>
    
    
    