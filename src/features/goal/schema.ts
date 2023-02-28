import { TodoStatus } from '../todo/todo-status';

export type Goal = {
  id: string;
  title: string;
  dueDate: Date;
  description: string;
  todoStatus: TodoStatus[];
  milestones?: string[];
  tasks?: string[];
};
