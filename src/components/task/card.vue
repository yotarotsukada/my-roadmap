<script setup lang="ts">
import MazCard from 'maz-ui/components/MazCard';
import { Task } from '~~/src/schema';

defineProps<{
  task: Task;
}>();
defineEmits(['toggle']);
</script>

<template>
  <MazCard class="screen" @click="$emit('toggle', task.id)">
    <div class="flex">
      <input type="checkbox" :checked="task.status === 'Done'" />
      <div class="wrapper">
        <h3>{{ task.title }}</h3>
        <p>期限：{{ formatDate(task.dueDate) }}</p>
      </div>
    </div>
  </MazCard>
</template>

<style scoped lang="scss">
.screen {
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
}
.flex {
  display: flex;
  gap: 16px;
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 0 16px;
  white-space: pre-wrap;
  color: v-bind('task.status === "Done" && "gray"');
  text-decoration: v-bind('task.status === "Done" && "line-through"');
}
</style>
