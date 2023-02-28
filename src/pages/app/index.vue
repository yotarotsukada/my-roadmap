<script setup lang="ts">
import { mockGoals } from '~~/src/features/goal';

const goals = mockGoals;
</script>

<template>
  <section class="section">
    <h2>ようこそ！</h2>
    <section class="section">
      <div class="column">
        <h3>進行中の目標計画</h3>
        <BaseButton to="app/goals/create" size="sm">新規作成</BaseButton>
      </div>
      <ul class="goals">
        <li v-for="goal in goals" :key="goal.id">
          <div class="card-wrapper">
            <BaseCard
              :href="`app/goals/${goal.id}`"
              :images="[`https://picsum.photos/seed/${goal.id}/400/300`]"
              :title="goal.title"
              orientation="row"
            >
              24/31 完了
            </BaseCard>
          </div>
        </li>
      </ul>
    </section>
  </section>
</template>

<style scoped lang="scss">
.section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.column {
  display: flex;
  justify-content: space-between;
}
.goals {
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: none;
}
.card-wrapper {
  display: flex;
  flex-direction: column;
  align-content: stretch;
}
</style>
