<template>
  <header class="bg-orange-200 shadow h-16 flex justify-between vw = 100% ">
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center h-full px-10"
    >
      Home
    </router-link>
    <div class="items-center gap-1">
      <router-link
        :to="{ name: 'Random' }"
        class="inline-flex transition-colors items-center px-2 h-full shadow-xl hover:bg-red-500"
      >
        Random Browse Cat Breeds
      </router-link>
      <router-link
        :to="{ name: 'Name' }"
        class="inline-flex transition-colors items-center px-2 h-full shadow-xl hover:bg-red-500"
      >
        Search by Name
      </router-link>
      <router-link
        :to="{ name: 'Filter' }"
        class="inline-flex transition-colors items-center px-2 h-full shadow-xl hover:bg-red-500"
      >
        Filter Search by Letter
      </router-link>
      <router-link
        :to="{ name: 'Origin' }"
        class="inline-flex transition-colors items-center px-2 shadow-xl h-full hover:bg-red-500"
      >
        Cat Breeds by Country Origin
      </router-link>
    </div>
  </header>
</template>


<style>

header {
  position: relative;
  width: 100%;
  height: 70px;
  align-items: center;
  justify-content: space-between;
}

</style>

