export type Goal = {
  id: string;
  title: string;
  dueDate: Date;
  description: string;
  milestones?: string[];
  tasks?: string[];
};
