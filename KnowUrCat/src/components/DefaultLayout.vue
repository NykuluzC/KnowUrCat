<template>
    <div class = "bg-red-400 h-flex">
        <navbar />
        <main>
            <router-view />

            
        </main>
    </div>
</template>


<style>
 

</style>

<script setup>
import Navbar from '../components/navbar.vue'
</script>