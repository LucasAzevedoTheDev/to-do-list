function toggleCompleted(todo) {
  if(todo.completed === false) {
    todo.completed = true;
  }
  else {
    todo.completed = false;
  }
}

function deleteTodo(todo) {
  let currentProject = todo.project.todos;

  for (let i = 0; i < currentProject.length; i++) {
    if (currentProject[i] === todo) {
      currentProject.splice(i, 1);
      break;
    }
  }
}