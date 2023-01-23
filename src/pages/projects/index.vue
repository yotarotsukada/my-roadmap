<script setup lang="ts">
const result = await useFindAllProjects();
const projects = computed(() => result.data.value?.projects);
</script>

<template>
  <div>
    <div class="screen">
      <h2>プロジェクト一覧</h2>
      <Fallback v-bind="result">
        <div class="card-list">
          <div v-for="project in projects" :key="project.id" class="card">
            <ProjectCard :project="project" />
          </div>
        </div>
      </Fallback>
    </div>
  </div>
</template>

<style scoped lang="scss">
.screen {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.wrap {
  white-space: pre-wrap;
}
.card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;
}
.card {
  width: 48%;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
}
</style>
