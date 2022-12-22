<script setup lang="ts">
import MazBtn, { Color } from 'maz-ui/components/MazBtn';
defineProps<{
  color?: Color;
}>();
</script>

<template>
  <MazBtn :color="color">
    <slot>Click</slot>
  </MazBtn>
</template>

<style scoped lang="scss"></style>
