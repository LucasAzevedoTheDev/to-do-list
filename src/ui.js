import "./styles.css";

const containerDiv = document.createElement("div");
containerDiv.classList.add("container-div");

function createContainer() {
  const body = document.querySelector("body");
  body.appendChild(containerDiv);
}

function createTodoDiv(todo) {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-div");
  containerDiv.appendChild(todoDiv);

  const todoTitle = document.createElement("p");
  todoTitle.classList.add("todo-title");
  todoTitle.textContent = todo.title;

  const todoDescription = document.createElement("p");
  todoDescription.classList.add("todo-description");
  todoDescription.textContent = todo.description;

  const todoDate = document.createElement("p");
  todoDate.classList.add("todo-date");
  todoDate.textContent = todo.dueDate;

  const todoPriority = document.createElement("p");
  todoPriority.classList.add("todo-priority");
  todoPriority.textContent = todo.priority;

  const todoNotes = document.createElement("p");
  todoNotes.classList.add("todo-notes");
  todoNotes.textContent = todo.notes;

  
  todoDiv.appendChild(todoTitle);
  todoDiv.appendChild(todoDescription);
  todoDiv.appendChild(todoDate);
  todoDiv.appendChild(todoPriority);
  todoDiv.appendChild(todoNotes);
}

export {createContainer, createTodoDiv};


