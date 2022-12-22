<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>

<template>
  <BaseButton>{{ `${label} ${label}` }}</BaseButton>
</template>

<style scoped>
button {
  background-color: green;
  color: white;
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
}
</style>
