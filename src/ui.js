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

function createProjectsDiv() {
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("project-div");
  containerDiv.before(projectDiv);

  projects.forEach((project) => {
    const projectButtons = document.createElement("button");
    projectButtons.classList.add("project-buttons");
    projectButtons.textContent = project.name;
    projectDiv.appendChild(projectButtons);

    projectButtons.addEventListener("click", (event) => {
      todoContainer.replaceChildren();
      let currentProject = projects.find(project => project.name === event.target.textContent);
      currentProject.todos.forEach((todo) => {
        createTodoDiv(todo);
      }); 
    });
  });
}

function createNewButton() {
  const newButton = document.createElement("button");
  newButton.classList.add("new-button");
  newButton.textContent = "New Todo";
  containerDiv.appendChild(newButton);
}

function createDialog() {
  const dialog = document.createElement("dialog");
  dialog.classList.add("modal");
  containerDiv.appendChild(dialog);

  const form = document.createElement("form");
  form.classList.add("form");
  form.action = "";
  form.method = "dialog";
  dialog.appendChild(form);

  const formField = document.createElement("div");
  formField.classList.add("form-field");
  form.appendChild(formField);

  const titleLabel = document.createElement("label");
  titleLabel.htmlFor = "title-input"
  titleLabel.textContent = "Title";

  const titleInput = document.createElement("input");
  titleInput.type = "text"
  titleInput.id = "title-input";
  titleInput.required = true;

  const descriptionLabel = document.createElement("label");
  descriptionLabel.htmlFor = "description-input"
  descriptionLabel.textContent = "Description";

  const descriptionInput = document.createElement("input");
  descriptionInput.type = "text"
  descriptionInput.id = "description-input";

  const dueDateLabel = document.createElement("label");
  dueDateLabel.htmlFor = "dueDate-input"
  dueDateLabel.textContent = "Due";

  const dueDateInput = document.createElement("input");
  dueDateInput.type = "datetime-local"
  dueDateInput.id = "dueDate-input";
  
}

export {createContainer, createTodoDiv, createProjectsDiv, createNewButton};



