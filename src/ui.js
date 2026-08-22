import "./styles.css";
import {deleteTodo} from "./edit.js";
import {projects} from "./todo.js";

const body = document.querySelector("body");
const containerDiv = document.createElement("div");
containerDiv.classList.add("container-div");

const todoContainer = document.createElement("div");
todoContainer.classList.add("todo-container");

function createContainer() {
  body.appendChild(containerDiv);
  containerDiv.appendChild(todoContainer);
}

function createTodoDiv(todo) {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-div");
  todoContainer.appendChild(todoDiv);

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

  const todoCheck = document.createElement("input");
  todoCheck.type = "checkbox";
  todoCheck.classList.add("todo-check");

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  
  deleteButton.addEventListener("click", () => {
    todoDiv.remove();
    deleteTodo(todo);
  });

  todoDiv.appendChild(todoTitle);
  todoDiv.appendChild(todoDescription);
  todoDiv.appendChild(todoDate);
  todoDiv.appendChild(todoPriority);
  todoDiv.appendChild(todoNotes);
  todoDiv.appendChild(todoCheck);
  todoDiv.appendChild(deleteButton);
}

function createProjectDiv() {
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("project-div");
  containerDiv.prepend(projectDiv);

  projects.forEach(project => {
    const projectButtons = document.createElement("button");
    projectButtons.classList.add("project-buttons");
    projectButtons.textContent = project.name;
    projectDiv.appendChild(projectButtons);

    projectButtons.addEventListener("click", () => {
      // 
    })
  });
}

export {createContainer, createTodoDiv, createProjectDiv};



