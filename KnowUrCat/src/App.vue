<script setup>
   

</script>



<template>
    <div class = "bg-red-400 h-full">
        <header class="bg-white shadow  h-16 flex justify-between items-stretch">
        <router-link :to="{name: 'home'}" class="inline-flex items-center h-full px-10">
        Home
        </router-link>
        <div class="items-center gap-1 ">
            <router-link to="{name: 'thruRandom'}" class="inline-flex transition-colors items-center px-2 h-full shadow-xl hover:bg-orange-300">
                Random Browse Cat Breeds
            </router-link>
            <router-link to="{name: 'thruName'}" class="inline-flex transition-colors items-center px-2 h-full shadow-xl hover:bg-orange-300">
                Search by Name
            </router-link>
            <router-link to="{name: 'thruFilter'}" class="inline-flex transition-colors items-center px-2 h-full shadow-xl hover:bg-orange-300">
                Filter Search by Letter
            </router-link>
            <router-link to="{name: 'thruOrigin'}" class="inline-flex transition-colors items-center px-2 shadow-xl h-full hover:bg-orange-300">
                Cat Breeds by Country Origin
            </router-link>
        </div>
        </header>
        <main>
            <router-view />
        </main>
    </div>
</template>


<style scoped>
</style>