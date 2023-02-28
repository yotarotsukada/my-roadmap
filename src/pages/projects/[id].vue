<script setup lang="ts">
import { useFindOneProject, useModifyProject } from '~~/src/features/project';
import {
  TaskStatus,
  useModifyTaskStatus,
  useRegisterTask,
} from '~~/src/features/task';

const route = useRoute();
const id = route.params.id as string;

const router = useRouter();

const result = await useFindOneProject(id);
const project = computed(() => result.data.value?.project);
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

const handleToggle = async (id: string) => {
  if (!result.data.value) {
    return;
  }

  const task = tasks.value?.find((task) => task.id === id);
  if (!task) {
    throw new Error('Task not found');
  }

  const toggled: TaskStatus = isTaskDone(task) ? 'Todo' : 'Done';
  const modified =
    tasks.value?.map((task) => {
      if (task.id !== id) {
        return task;
      }
      return { ...task, status: toggled };
    }) ?? [];

  result.data.value = {
    project: {
      ...result.data.value.project,
      tasks: modified,
    },
  };
  await useModifyTaskStatus(id, toggled);
};

const saveDescription = async () => {
  if (!project.value) {
    return;
  }
  await useModifyProject(id, project.value);
};

const modalVisible = computed(() => route.query.mode === 'create');

const openModal = () => {
  if (modalVisible.value) {
    return;
  }
  router.push({ query: { mode: 'create' } });
};

const closeModal = () => {
  if (!modalVisible.value) {
    return;
  }
  router.push({ query: { mode: undefined } });
  resetInput();
};

const taskTitle = ref('');
const dueDate = ref('2023-01-01');
const description = ref('');

const resetInput = () => {
  taskTitle.value = '';
  description.value = '';
};

const handleRegister = async (e: Event) => {
  e.preventDefault();
  await useRegisterTask(description.value, dueDate.value, taskTitle.value, id);
  closeModal();
  result.refresh();
};
</script>

<template>
  <Fallback v-bind="result">
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
          <BaseTextarea v-model="project.description" @blur="saveDescription" />
        </template>
      </div>
      <h3>タスク</h3>
      <div v-if="tasks">
        <div class="row">
          <p>
            {{ doneCount }} / {{ tasks.length }} 完了
            <span v-if="isProjectDone">🎉</span>
          </p>
          <BaseButton size="sm" @click="openModal">追加</BaseButton>
        </div>
        <div class="tasks">
          <div v-for="task in tasks" :key="task.id">
            <TaskCard :task="task" @toggle="handleToggle" />
          </div>
        </div>
      </div>
    </div>
  </Fallback>
  <BaseModal
    v-model="modalVisible"
    :show="modalVisible"
    title="新規タスク"
    @close="closeModal"
  >
    <form class="modal" action="" @submit="(e) => handleRegister(e)">
      <div class="input">
        <div>
          <label for="title">タイトル</label>
          <BaseInput id="title" v-model="taskTitle" required />
        </div>
        <div>
          <label for="due-date">期限</label>
          <BaseInput id="due-date" v-model="dueDate" required type="date" />
        </div>
        <div>
          <label for="description">詳細</label>
          <BaseTextarea id="description" v-model="description" />
        </div>
      </div>
      <div>
        <BaseButton type="submit">登録</BaseButton>
      </div>
    </form>
  </BaseModal>
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
.tasks {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 0;
}
.row {
  display: flex;
  justify-content: space-between;
}
.input {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: 320px;
  padding-right: 16px;
  margin-right: -16px;
  overflow-y: scroll;
}
.modal {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
