<script setup lang="ts">
import { Todo } from '~~/src/features/todo';
import { TodoStatus } from '~~/src/features/todo/todo-status';

const props = defineProps<{ todo: Todo; todoStatus: TodoStatus[] }>();

const selected = ref(props.todo.status.id);
const options = props.todoStatus.map((status) => ({
  label: status.text,
  value: status.id,
}));
</script>

<template>
  <BaseCard>
    <div class="wrapper">
      <div class="text-wrapper">
        <h3 class="overflow">{{ todo.title }}</h3>
        <p class="overflow">
          {{ todo.description }}
        </p>
      </div>
      <BaseSelect v-model="selected" :options="options" class="select" />
    </div>
  </BaseCard>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: space-between;
}
.text-wrapper {
  flex: 1;
  min-width: 0;
}
.text-wrapper > * {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.select {
  width: 160px;
  flex-shrink: 0;
}
</style>
