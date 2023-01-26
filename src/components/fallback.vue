<script setup lang="ts">
import { Ref } from 'vue';

defineProps<{
  error: Ref<Error | null>;
  pending: Ref<boolean>;
  data: Ref;
}>();
</script>

<template>
  <template v-if="error.value">
    <h3>Error occurred</h3>
    <p>{{ error.value.stack ?? error.value.message }}</p>
  </template>
  <template v-else-if="!data.value && pending.value">
    <p>Loading...</p>
  </template>
  <template v-else>
    <slot />
  </template>
</template>

<style scoped lang="scss"></style>
