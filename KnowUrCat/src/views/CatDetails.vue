<template>

    <div>
        <pre>{{ cat }}</pre>
        <h1 class="text-5xl font-bold mb-5">{{ cat.name }}</h1>
        <img :src="cat.image_link" :alt="name" class="rounded-t-xl h-29 img-responsive  image-resize  object-cover cl">
    </div>

</template>




<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';

const route = useRoute();
const cat = ref({})

onMounted(() => {
    axiosClient.get(`cats?name=${route.params.id}`)
    .then(({ data }) => {
        debugger;
        cat.value = data
    })
})

</script>