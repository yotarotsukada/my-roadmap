<script setup lang="ts">
import { Ref } from 'vue';

defineProps<{
  error: Ref<boolean>;
  pending: Ref<boolean>;
}>();
</script>

<template>
  <template v-if="error.value">
    <p>Error occurred</p>
  </template>
  <template v-else-if="pending.value">
    <p>Loading...</p>
  </template>
  <template v-else>
    <slot />
  </template>
</template>

<style scoped lang="scss"></style>
