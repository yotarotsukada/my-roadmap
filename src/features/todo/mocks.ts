import { Todo } from './schema';
import { mockTodoStatus } from './todo-status';

export const mockTodos: Todo[] = [
  {
    id: 'todo-1',
    title: '参考書を読む',
    description: 'とりあえず1周。',
    parentId: 'goal-1',
    status: mockTodoStatus[0],
  },
  {
    id: 'todo-2',
    title: '参考書の練習問題を解く',
    description:
      'レベル感としてはそんなに。\n数が多いので習うより慣れろな感じでやっていきたい。',
    parentId: 'goal-1',
    status: mockTodoStatus[0],
  },
  {
    id: 'todo-3',
    title:
      '参考書の実践問題を解いて解いて解いて解いて解いて解いて解いて解いて解いて解いて解きまくる',
    description: '',
    parentId: 'goal-1',
    status: mockTodoStatus[0],
  },
];
