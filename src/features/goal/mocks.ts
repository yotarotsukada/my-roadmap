import { Goal } from './schema';

export const mockGoals: Goal[] = [
  {
    id: 'goal-1',
    title: '応用情報技術者試験',
    dueDate: new Date('2023-04-22'),
    description: '応用情報に合格するぞ！前回1点足りなかったのでリベンジ',
    milestones: [],
    tasks: [],
  },
  {
    id: 'goal-2',
    title: 'ディジタル検定2級',
    dueDate: new Date('2023-06-01'),
    description: 'これはマストで通過したい。',
    milestones: [],
    tasks: [],
  },
];
