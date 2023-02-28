<script setup lang="ts">
import { mockGoals } from '~~/src/features/goal';

const route = useRoute();
const id = route.params.id;
const goal = mockGoals.find((goal) => goal.id === id) ?? mockGoals[0];

const title = ref(goal.title);
const description = ref(goal.description);
const dueDate = ref(formatDate(goal.dueDate, '-'));
</script>

<template>
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
      <h3>バックログ</h3>
      <BaseCard to="/">なんとかする</BaseCard>
      <BaseCard to="/">なんとかする</BaseCard>
      <BaseCard to="/">なんとかする</BaseCard>
      <BaseCard to="/">なんとかする</BaseCard>
    </Section>
  </Section>
</template>

<style scoped lang="scss"></style>
