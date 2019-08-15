import { Component } from "@angular/core";
import { Todo, Visibility } from "./todo";

const Todos: Todo[] = [
  { id: 1, text: "Hacer la tarea temprano", completed: false },
  { id: 2, text: "Comprar pan", completed: false }
];

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angular-demo";
  todos = Todos;
  visibility = "ALL";

  toggleTodo(todo) {
    this.todos = this.todos.map(t => {
      if (t.id === todo.id) {
        return { ...t, completed: !t.completed };
      }

      return t;
    });
  }

  setVisibility(visibility: Visibility) {
    this.visibility = visibility;
  }
}
