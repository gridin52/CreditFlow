<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    header: {
      type: String,
      required: true
    },
    creditValue: {
      type: String,
      required: true
    }
  })
</script>
<template>
<div class="flex flex-col p-3 rounded-lg bg-sky-900/50">
  <!-- Title -->
  <div class="text-xs text-neutral-400">
    {{ header }}
  </div>
  <div class="font-semibold text-xl">
    {{ creditValue }} ₽
  </div>
</div>
</template>