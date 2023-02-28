import { TodoStatus } from './todo-status';

export type Todo = {
  id: string;
  title: string;
  description: string;
  parentId: string;
  status: TodoStatus;
};
