<script setup>
  import { RouterView } from 'vue-router';
  import Header from './components/Header.vue';
</script>

<template>
  <main class="max-w-[390px] h-screen flex flex-col bg-[hsl(0_0%_8%)] text-neutral-200">
    <Header />
    <div class="flex-1 min-h-0">
      <RouterView />
    </div>
  </main>
</template>