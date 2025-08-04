<script setup>
  import { RouterView } from 'vue-router';
  import Header from './components/Header.vue';

</script>

<template>
  <main class="max-w-[390px] h-screen flex flex-col bg-[hsl(0_0%_8%)] text-neutral-200">
    <div>
      <Header />
    </div>
    <div class="flex-1">
      <RouterView />
    </div>
  </main>
</template>

<style scoped>
</style>
