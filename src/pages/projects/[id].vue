<script setup lang="ts">
import { TaskStatus } from '~~/src/schema';

const route = useRoute();
const id = route.params.id as string;

const { data } = await useFindOneProject(id);
const project = computed(() => data.value?.project);
const tasks = computed(() => project.value?.tasks);

const isTaskDone = (task: { status: TaskStatus }) => {
  return task.status === 'Done';
};

const doneCount = computed(() =>
  tasks.value?.reduce((sum, task) => (isTaskDone(task) ? sum + 1 : sum), 0)
);
const isProjectDone = computed(
  () => tasks.value?.length && tasks.value.length === doneCount.value
);

// TODO 変更の保存は未実装
const handleToggle = (id: string) => {
  if (!data.value) {
    return;
  }

  const modified =
    tasks.value?.map((task) => {
      if (task.id !== id) {
        return task;
      }
      const status: TaskStatus = isTaskDone(task) ? 'Todo' : 'Done';
      return { ...task, status };
    }) ?? [];

  data.value = {
    project: {
      ...data.value.project,
      tasks: modified,
    },
  };
};
</script>

<template>
  <div>
    <div v-if="project" class="screen">
      <h2>{{ project.title }}</h2>
      <h3>プロジェクト情報</h3>
      <div class="content">
        <h4>期限日</h4>
        <p>{{ formatDate(project.dueDate) }}</p>
        <h4>目標</h4>
        <p>{{ project.goal }}</p>
        <template v-if="project.description">
          <h4>詳細</h4>
          <textarea v-model="project.description" />
        </template>
      </div>
      <h3>タスク</h3>
      <div v-if="tasks">
        <p>
          {{ doneCount }} / {{ tasks.length }} 完了
          <span v-if="isProjectDone">🎉</span>
        </p>
        <div class="tasks">
          <div v-for="task in tasks" :key="task.id">
            <TaskCard :task="task" @toggle="handleToggle" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.screen {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
textarea {
  height: 160px;
  padding: 16px;
  line-height: 1.6rem;
  background-color: #eeeeee;
  resize: none;
}
.tasks {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 0;
}
</style>
