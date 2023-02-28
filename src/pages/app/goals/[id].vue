<script setup lang="ts">
import { mockGoals } from '~~/src/features/goal';
import { mockTodos } from '~~/src/features/todo';

const route = useRoute();
const id = route.params.id;

// TODO fetch
const goal = mockGoals.find((goal) => goal.id === id) ?? mockGoals[0];

// TODO fetch
const todos = mockTodos.filter((todo) => todo.parentId === id);

const title = ref(goal.title);
const description = ref(goal.description);
const dueDate = ref(formatDate(goal.dueDate, '-'));
</script>

<template>
  <Section elem="div" :gap="48">
    <a href="/app">&lt; 目標計画一覧にもどる</a>
    <Section gap="wide">
      <h2>{{ title }}</h2>
      <Section>
        <BaseTextarea v-model="description" disabled />
        <BaseInput v-model="dueDate" type="date" label="期限日" disabled />
      </Section>
      <Section>
        <h3>サーキットボード</h3>
        <BaseCard to="/">
          <Section>
            <h4>サーキット1</h4>
          </Section>
        </BaseCard>
      </Section>
      <Section>
        <div class="column">
          <h3>バックログ</h3>
          <BaseButton size="sm" disabled>+ ToDo追加</BaseButton>
        </div>
        <TodoCard
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
          :todo-status="goal.todoStatus"
        />
      </Section>
    </Section>
  </Section>
</template>

<style scoped lang="scss">
.column {
  display: flex;
  justify-content: space-between;
}
</style>
