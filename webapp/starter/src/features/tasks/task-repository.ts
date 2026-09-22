import { DB } from "@/db";
import { tasks } from "@/db/schema/task-schema";

export interface TaskRepository {
  createTask: (task: any) => Promise<any>;
  update: (id: string, task: any) => Promise<any>;
  get: (id: string) => Promise<any>;
  list: () => Promise<any>;
  remove: (id: string) => Promise<void>;
}

export function createTaskRepository(db: DB): TaskRepository {
  return {
    // Add your task repository methods here
    create: (task) => {
      db.insert(tasks);
    },
  };
}

const repository = createTaskRepository();

repository.createTask({ title: "New Task", description: "This is a new task" });
