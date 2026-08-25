import "./styles.css";
import {deleteTodo} from "./edit.js";
import {projects, priority} from "./todo.js";

const body = document.querySelector("body");
const containerDiv = document.createElement("div");
containerDiv.classList.add("container-div");

const todoContainer = document.createElement("div");
todoContainer.classList.add("todo-container");

const dialog = document.createElement("dialog");
dialog.classList.add("modal");
containerDiv.appendChild(dialog);

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
  deleteButton.textContent = "Delete";
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

  newButton.addEventListener("click", () => {
      dialog.showModal();
  });
}

function createDialog() {
  const form = document.createElement("form");
  form.classList.add("form");
  form.action = "";
  form.method = "dialog";
  dialog.appendChild(form);

  const formField = document.createElement("div");
  formField.classList.add("form-field");
  form.appendChild(formField);

  const titleLabel = document.createElement("label");
  titleLabel.htmlFor = "title-input";
  titleLabel.textContent = "Title:";

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.id = "title-input";
  titleInput.required = true;

  const descriptionLabel = document.createElement("label");
  descriptionLabel.htmlFor = "description-input";
  descriptionLabel.textContent = "Description:";

  const descriptionInput = document.createElement("input");
  descriptionInput.type = "text";
  descriptionInput.id = "description-input";

  const dueDateLabel = document.createElement("label");
  dueDateLabel.htmlFor = "dueDate-input";
  dueDateLabel.textContent = "Due:";

  const dueDateInput = document.createElement("input");
  dueDateInput.type = "datetime-local";
  dueDateInput.id = "dueDate-input";
  dueDateInput.required = true;

  const priorityLabel = document.createElement("label");
  priorityLabel.htmlFor = "priority-input";
  priorityLabel.textContent = "Priority:";

  const priorityInput = document.createElement("select");
  priorityInput.id = "priority-input";
  priorityInput.required = true;

  const defaultPriorityOption = document.createElement("option");
  defaultPriorityOption.value = "";
  defaultPriorityOption.textContent = "--Please choose an option--";
  priorityInput.add(defaultPriorityOption);

  priority.forEach(priority => {
    const option = new Option(priority.text, priority.value);
    priorityInput.add(option);
  });

  const projectLabel = document.createElement("label");
  projectLabel.htmlFor = "project-input";
  projectLabel.textContent = "Project:";

  const projectInput = document.createElement("select");
  projectInput.id = "project-input";
  projectInput.required = true;

  projectInput.add(defaultPriorityOption);

  projects.forEach(project => {
    const option = new Option(project.name, project.name);
    projectInput.add(option);
  });

  formField.appendChild(titleLabel);
  formField.appendChild(titleInput);
  formField.appendChild(descriptionLabel);
  formField.appendChild(descriptionInput);
  formField.appendChild(dueDateLabel);
  formField.appendChild(dueDateInput);
  formField.appendChild(priorityLabel);
  formField.appendChild(priorityInput);
  formField.appendChild(projectLabel);
  formField.appendChild(projectInput);

  const buttonsField = document.createElement("div");
  buttonsField.classList.add("buttons-field");
  form.appendChild(buttonsField);

  const submitButton = document.createElement("button");
  submitButton.classList.add("submit-button");
  submitButton.type = "submit"
  submitButton.textContent = "Add Todo";

  const closeButton = document.createElement("button");
  closeButton.classList.add("close-button");
  closeButton.type = "button";
  closeButton.textContent = "Cancel";

  buttonsField.appendChild(submitButton);
  buttonsField.appendChild(closeButton);
}

export {createContainer, createTodoDiv, createProjectsDiv, createNewButton, createDialog};



