import { Pipe, PipeTransform } from "@angular/core";
import { Todo, Visibility } from "./todo";

@Pipe({ name: "filterTodos" })
export class FilterTodosPipe implements PipeTransform {
  transform(todos: Todo[], visibility: Visibility): Todo[] {
    switch (visibility) {
      case "ACTIVE": {
        return todos.filter(todo => !todo.completed);
      }
      case "COMPLETED": {
        return todos.filter(todo => todo.completed);
      }
      case "ALL":
      default: {
        return todos;
      }
    }
  }
}
