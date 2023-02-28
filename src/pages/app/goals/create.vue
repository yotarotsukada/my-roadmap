<script setup lang="ts">
import { Ref } from 'vue';
import dayjs from 'dayjs';
import { Goal, mockGoals } from '~~/src/features/goal';
import { mockTodoStatus } from '~~/src/features/todo/todo-status';

const router = useRouter();

const title = ref('');
const description = ref('');
const dueDate = ref(formatDate(new Date(), '-'));
const term = computed(() =>
  dayjs(dueDate.value).diff(formatDate(new Date()), 'd')
);

const milestones = ref(
  Array<{
    name: Ref<string>;
  }>({
    name: ref(''),
  })
);
const canAddMilestone = computed(
  () => milestones.value.slice(-1)[0].name.trim() !== ''
);
const addMilestone = () => {
  if (!canAddMilestone) {
    return;
  }
  milestones.value = [
    ...milestones.value,
    {
      name: '',
    },
  ];
};

const circuitSpan = ref<number>(14);
const circuitCount = computed(() => Math.ceil(term.value / circuitSpan.value));

const canSubmit = computed(
  () =>
    !(
      title.value === '' ||
      dueDate.value === undefined ||
      circuitCount.value === 0
    )
);
const submit = () => {
  const id = `goal-${mockGoals.length + 1}`;
  const newGoal: Goal = {
    id,
    title: title.value,
    dueDate: new Date(dueDate.value),
    description: description.value,
    todoStatus: mockTodoStatus, // TODO 設定できるように
  };
  mockGoals.push(newGoal);
  router.push(`/app/goals/${id}`);
};
</script>

<template>
  <Section gap="wide">
    <h2>新規目標</h2>
    <Section>
      <h3>基本情報</h3>
      <BaseInput v-model="title" name="name" label="目標" />
      <BaseTextarea v-model="description" label="詳細" />
      <BaseInput v-model="dueDate" type="date" label="期限日" />
    </Section>

    <Section>
      <h3>マイルストーン</h3>
      <Section elem="div" gap="narrow">
        <BaseInput
          v-for="(_, index) in milestones"
          :key="index"
          v-model="milestones[index].name"
          :label="`マイルストーン${index + 1}`"
        />
      </Section>
      <div>
        <BaseButton
          :onclick="addMilestone"
          size="sm"
          :disabled="!canAddMilestone"
        >
          + 追加
        </BaseButton>
      </div>
    </Section>
    <Section>
      <h3>サーキット設定</h3>
      <p>
        ゴールの期限まで：残り<span class="bold">{{ term }}</span
        >日
      </p>
      <Section gap="narrow">
        <h4>期間で決める</h4>
        <div class="input-wrapper">
          <BaseInput v-model="circuitSpan" type="number" /><span class="bold"
            >日</span
          >
        </div>
      </Section>
      <Section gap="narrow">
        <h4>回数で決める</h4>
        <div class="input-wrapper">
          <BaseInput v-model="circuitCount" type="number" disabled /><span
            class="bold"
            >回</span
          >
        </div>
      </Section>
    </Section>
    <div class="button-wrapper">
      <BaseButton :onclick="submit" :disabled="!canSubmit">作成</BaseButton>
      <BaseButton to="/app" pastel> キャンセル </BaseButton>
    </div>
  </Section>
</template>

<style scoped lang="scss">
.input-wrapper {
  display: flex;
  align-items: baseline;
  gap: 4px;
}
.bold {
  font-weight: 600;
}
.button-wrapper {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding-top: 48px;
}
</style>
