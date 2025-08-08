<script setup>
  import { computed, defineProps } from 'vue';
  import { formattedAmount } from '@/utils/formatters'

  const props = defineProps({
    header: {
      type: String,
      required: true
    },
    creditValue: {
      type: Number,
      required: true
    },
    bg: {
      type: String,
      required: false
    }
  })
</script>
<template>
<div 
  class="flex flex-col pr-3 pl-3 pt-2 pb-2 rounded-lg"
  :class="bg ? bg : 'bg-sky-900/50'"
>
  <!-- Title -->
  <div class="text-xs">
    {{ header }}
  </div>
  <div class="font-semibold text-xl">
    {{ formattedAmount(props.creditValue) }} ₽
  </div>
</div>
</template>