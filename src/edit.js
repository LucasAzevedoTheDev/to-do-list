import {Todo} from "./todo.js"

function toggleCompleted() {
  if(Todo.completed === false) {
    Todo.completed = true;
  }
  else {
    Todo.completed = false;
  }
}