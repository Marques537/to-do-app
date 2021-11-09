enum TaskPriority{
  Low,
  medium,
  High,
}
export interface Task{
  title: string;
  description: string;
  dueDate: Date;
  priority: TaskPriority; 
  label: string[];
}