<template>
    <div class = "bg-red-400 h-flex">
        <navbar />
        <main>
            <router-view />

            <body>
                <div class="background"></div>
                
            </body>
        </main>
    </div>
</template>


<style>
 .background {
    display: block;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
 }

</style>

<script setup>
import Navbar from '../components/navbar.vue'
</script>