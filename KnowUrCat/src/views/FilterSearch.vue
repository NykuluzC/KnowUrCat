<template>
     <div class="flex flex-col p-8 ">
    
      
      
    <div class="flex justify-center gap-3 mt-4">
      <router-link :to="{name: 'byLetterID', params: {letterID}}" v-for="letterID of letters" :key="letter">
        {{ letterID }}
      </router-link>
    </div>
  </div>
</template>

<script setup>


</script>