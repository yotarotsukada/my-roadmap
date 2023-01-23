<script setup lang="ts">
import MazCard from 'maz-ui/components/MazCard';
import { Project } from '~~/src/schema';

defineProps<{
  project: Project;
}>();
</script>

<template>
  <MazCard collapsable>
    <template #header>
      <div class="wrapper">
        <h3>{{ project.title }}</h3>
        <BaseButton
          :to="`projects/${project.id}`"
          size="sm"
          @click="(e) => e.preventDefault()"
        >
          ページへ
        </BaseButton>
      </div>
    </template>
    <template #content>
      <div class="wrapper">
        <p>{{ project.goal }}</p>
        <p>期限：{{ formatDate(project.dueDate) }}</p>
      </div>
    </template>
  </MazCard>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 16px;
  white-space: pre-wrap;
}
</style>
