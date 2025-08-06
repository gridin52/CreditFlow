<script setup>
  import CreditsWidgets from '@/components/CreditsWidgets.vue';
  import CreditItem from '@/components/CreditItem.vue';
  import { useCreditsStore } from '@/stores/credits';

  const creditsStore = useCreditsStore()
</script>

<template>
  <div class="h-full flex flex-col p-2">
    <div class="grid grid-cols-2 gap-4 justify-between">
      <CreditsWidgets 
        header="Общий месячный платеж"
        creditValue="158 000"
        bg="bg-[hsl(120_100%_25%)]"
      />
      <CreditsWidgets 
        header="Остаток долга"
        creditValue="6 796 000"
      />
    </div>
    <div class="flex-1 overflow-y-auto mt-4 min-h-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div v-for="credit in creditsStore.credits" :key="credit.id">
        <CreditItem 
          :credit-data="credit"
        />
      </div>
    </div>
    <div class="mt-4">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full" @click="creditsStore.deleteCredit()">
        Удалить
      </button>
    </div>
  </div>
</template>