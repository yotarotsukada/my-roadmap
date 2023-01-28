<script setup lang="ts">
import MazDialog from 'maz-ui/components/MazDialog';

// defineProps<>();
defineEmits<{ (event: 'close'): void }>();
</script>

<template>
  <MazDialog @close="$emit('close')">
    <slot />
  </MazDialog>
</template>

<style scoped lang="scss"></style>
