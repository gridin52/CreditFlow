<script setup>
import { defineProps } from 'vue';

  const props = defineProps({
    creditData: {
      type: Object,
      required: true
    }
  })
</script>
<template>
   <div class="flex flex-col rounded-md pt-4 pb-4 pr-3 pl-3 mb-3 text-neutral-400 bg-neutral-800">
    <!-- Header -->
    <div class="flex flex-row justify-between mb-3">
      <div>
        <span class="text-md font-bold text-neutral-50">
          {{ creditData.creditName }}
        </span>
        <p class="text-xs">
          Платеж {{ creditData.monthlyPaymentDay }} месяца
        </p>
      </div>
      <div>
        <button>
          ...
        </button>
      </div>
    </div>
    <!-- Middle -->
    <div class="flex flex-row justify-between mb-3">
      <div>
        <div class=" flex flex-row items-end">
          <div class="font-bold text-xl text-neutral-50">{{ creditData.monthlyPayment }} ₽</div><div class="pl-2 pb-1 text-xs"> / {{ creditData.totalInstallments - creditData.installmentsPaid }} мес.</div>
        </div>
        <p class="text-sm">
          Осталось {{ creditData.totalPaymentAmount - creditData.installmentsPaid * creditData.monthlyPayment }} ₽
        </p>
        </div>
        <div>
          <button>
            Ок
          </button>
      </div>
    </div>
    <!-- Footer -->
     <div class="flex flex-col">
        <div class="w-full text-center">
          Полоса прогресса
        </div>
        <div class="flex flex-row justify-between text-xs">
          <div>
            {{ parseFloat(((creditData.monthlyPayment * creditData.installmentsPaid) / creditData.totalPaymentAmount * 100).toFixed(0))}}%
          </div>
          <div>
            {{ creditData.totalPaymentAmount }} ₽
          </div>
        </div>
     </div>
   </div>
</template>