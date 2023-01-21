export const mockProjects = [
  {
    id: 'p01',
    title: '基本情報技術者試験',
    goal: '4月に実施される基本情報技術者試験に合格する',
    description:
      '【MUST】\n参考書を1周読む\n過去問を7年分解く\n【WANT】\n参考書の予想問題を解く',
    dueDate: new Date('2023-04-05'),
    createdAt: new Date('2023-01-16'),
    taskIds: ['t01', 't02'],
  },
  {
    id: 'p02',
    title: '応用情報技術者試験',
    goal: '10月に実施される基本情報技術者試験に合格する',
    description:
      '【MUST】\n参考書を2周読む\n過去問を10年分解く\n【WANT】\n参考書の予想問題を解く',
    dueDate: new Date('2023-10-05'),
    createdAt: new Date('2023-01-16'),
    taskIds: ['t03', 't04', 't05'],
  },
];
