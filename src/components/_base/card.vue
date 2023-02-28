<script setup lang="ts">
import MazCard from 'maz-ui/components/MazCard';

defineProps<{
  title?: string;
}>();
</script>

<template>
  <MazCard>
    <template #title>
      <h4>{{ title }}</h4>
    </template>
    <template #content>
      <div class="font-reset">
        <slot />
      </div>
    </template>
  </MazCard>
</template>

<style scoped lang="scss">
.font-reset {
  color: var(--maz-color-text);
}
</style>
