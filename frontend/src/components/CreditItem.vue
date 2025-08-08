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
    <div class="flex flex-row justify-between items-center mb-3">
      <div>
        <div class=" flex flex-row items-end">
          <div class="font-bold text-xl text-neutral-50">{{ formattedAmount(creditData.monthlyPayment) }} ₽</div>
          <div class="pl-2 pb-1 text-xs"> / {{ remainingInstallments }} мес.</div>
        </div>
        <p class="text-sm">
          Осталось {{ formattedAmount(remainingAmount) }} ₽
        </p>
        </div>
        <div>
          <button class="rounded border border-green-600 text-green-600 px-3 py-1 hover:bg-green-600 hover:text-neutral-300 ease-linear duration-100">
            ✓
          </button>
      </div>
    </div>
    <!-- Footer -->
     <div class="flex flex-col">

          <div class="w-full h-1.5 bg-neutral-700 rounded-full overflow-hidden">
            <div
              class="h-full bg-green-500 transition-[width] duration-400 ease-in-out"
              :style="{ width: progress + '%' }"
            ></div>
          </div>

        <div class="flex flex-row justify-between text-xs mt-1">
          <div>
            {{ roundedProgress }}%
          </div>
          <div>
            {{ formattedAmount(creditData.totalPaymentAmount) }} ₽
          </div>
        </div>
     </div>
   </div>
</template>
<script setup>
import { defineProps, computed } from 'vue';
import { formattedAmount } from '@/utils/formatters';

  const props = defineProps({
    creditData: {
      type: Object,
      required: true
    }
  })

  // Общая уплаченная сумма
  const amountPaid = computed(() => props.creditData.installmentsPaid * props.creditData.monthlyPayment)

  // Какую сумму осталось платить
  const remainingAmount = computed(() => props.creditData.totalPaymentAmount - amountPaid.value)

  // Сколько месяцев осталось платить
  const remainingInstallments = computed(() => props.creditData.totalInstallments - props.creditData.installmentsPaid)

  // Подсчет прогресса оплаты кредита, чтобы двигать Progress Bar
  const progress = computed(() => {
      if (props.creditData.totalPaymentAmount === 0) {
        return 0
      }
      return (amountPaid.value / props.creditData.totalPaymentAmount * 100)
    }
  )
  
  // Перевод выплаченной суммы в проценты от общей суммы кредита
  const progressPrecentage = computed(() => {
    if (props.creditData.totalPaymentAmount === 0) {
      return 0
    }

    return (amountPaid.value / props.creditData.totalPaymentAmount) * 100
  })

  // Убирает дроби из процента прогресса
  const roundedProgress = computed(() => Math.round(progressPrecentage.value))
</script>