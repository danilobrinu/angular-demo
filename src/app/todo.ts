export class Todo {
  id: number;
  text: string;
  completed: boolean;
}

export type Visibility = "ALL" | "ACTIVE" | "COMPLETED";
