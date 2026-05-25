export type TaskStatus = "TODO" | "DOING" | "DONE";

export type Task = {
  id: number;
  title: string;
  description?: string;
  status: TaskStatus;
};