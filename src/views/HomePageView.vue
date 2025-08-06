<script setup>
  import CreditsWidgets from '@/components/CreditsWidgets.vue';
  import CreditItem from '@/components/CreditItem.vue';
  import { useCreditsStore } from '@/stores/credits';

  const creditsStore = useCreditsStore()

</script>

<template>
  <div class="h-full flex flex-col justify-between p-2">
    <!-- Widgets -->
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
    <!-- Credits list -->
    <div class="overflow-x-auto h-full mt-4">
      <div v-for="credit in creditsStore.credits">
        <CreditItem 
          :credit-data="credit"
        />
      </div>
    </div>
  </div>
</template>