export class TodoStatus {
  static ALL = "all";
  static ACTIVE = "active";
  static COMPLETED = "completed";
}

export class Todo {
  constructor(todos = []) {
    this.todos = todos;
  }

  getTodos(status = TodoStatus.ALL) {
    if (status === TodoStatus.ALL) {
      return this.todos;
    }

    return this.todos.filter((todo) => {
      if (status === TodoStatus.ACTIVE) {
        return !todo.completed;
      }

      return todo.completed;
    });
  }

  addTodo(title) {
    const todo = {
      id: Date.now(),
      title,
      completed: false,
    };

    this.todos.push(todo);
  }

  updateTodo(id) {
    const todo = this.todos.find((todo) => todo.id === +id);
    todo.completed = !todo.completed;
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id != id);
  }

  deleteAll() {
    this.todos = [];
  }
}
