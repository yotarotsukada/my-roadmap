<script setup lang="ts">
import { match } from 'ts-pattern';
const props = defineProps<{
  gap?: 'narrow' | 'medium' | 'wide' | number;
  elem?: 'section' | 'div';
}>();

const gap =
  match(props.gap)
    .with('narrow', () => 8)
    .with('medium', () => 16)
    .with('wide', () => 24)
    .otherwise((gap) => gap ?? 16) + 'px';
</script>

<template>
  <section v-if="elem === 'section'" class="section">
    <slot />
  </section>
  <div v-else class="section">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.section {
  display: flex;
  flex-direction: column;
  gap: v-bind(gap);
}
</style>
