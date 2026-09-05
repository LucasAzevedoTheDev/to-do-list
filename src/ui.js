import "./styles.css";
import {deleteTodo, deleteProject, formatDate, sortByDate, addPriorityColor} from "./edit.js";
import {addProject, addTodoToProject, projects, priority} from "./todo.js";
import {format} from "date-fns";

const body = document.querySelector("body");
const containerDiv = document.createElement("div");
containerDiv.classList.add("container-div");

const todoContainer = document.createElement("div");
todoContainer.classList.add("todo-container");

const dialog = document.createElement("dialog");
dialog.classList.add("modal");
containerDiv.appendChild(dialog);
  
const todoDialog = document.createElement("dialog");
todoDialog.classList.add("modal");
containerDiv.appendChild(todoDialog);

let currentProject;
let projectDiv;
let priorityText;
let todoPriority;

function createTheDiv() {
  projectDiv = document.createElement("div");
  projectDiv.classList.add("project-div");
  containerDiv.before(projectDiv);
}

function createProjectsDiv() {

  projects.forEach((project) => {
    const projectButtons = document.createElement("button");
    projectButtons.classList.add("project-buttons");
    projectButtons.textContent = project.name;
    projectDiv.appendChild(projectButtons);

    projectButtons.addEventListener("click", (event) => {
      todoContainer.replaceChildren();
      currentProject = projects.find(project => project.name === event.target.textContent);
      let sorted = sortByDate(currentProject);
      sorted.forEach((todo) => {
        createTodoDiv(todo);
      }); 

    });
  });
}

function createContainer() {
  body.appendChild(containerDiv);
  containerDiv.appendChild(todoContainer);
  currentProject = projects[0];
  createTheDiv();
  createProjectsDiv();
  createDialog();
  createNewButton();
  createNewProjectButton();
  createDeleteProjectButton();
}

function createTodoDiv(todo) {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-div");
  todoContainer.appendChild(todoDiv);

  const checkboxDiv = document.createElement("div");
  checkboxDiv.classList.add("checkbox-div");

  const titleDiv = document.createElement("div");
  titleDiv.classList.add("title-div");

  todoDiv.appendChild(checkboxDiv);
  todoDiv.appendChild(titleDiv);

  const todoTitle = document.createElement("p");
  todoTitle.classList.add("todo-title");
  todoTitle.textContent = todo.title;

  const todoDescription = document.createElement("p");
  todoDescription.classList.add("todo-description");
  todoDescription.textContent = todo.description;

  const todoDate = document.createElement("p");
  todoDate.classList.add("todo-date");
  todoDate.textContent = formatDate(todo.dueDate);

  todoPriority = document.createElement("p");
  todoPriority.classList.add("todo-priority");
  priorityText = todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1);
  todoPriority.textContent = `${priorityText} priority`;

  const todoCheck = document.createElement("input");
  todoCheck.type = "checkbox";
  todoCheck.classList.add("todo-check");

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", (event) => {
    event.stopPropagation(); 
    todoDiv.remove();
    deleteTodo(todo);
  });

  checkboxDiv.appendChild(todoCheck);
  titleDiv.appendChild(todoTitle);
  titleDiv.appendChild(todoDate);
  todoDiv.appendChild(deleteButton);
  addPriorityColor(todo, todoDiv);

  todoCheck.addEventListener("click", function(event) {
    event.stopPropagation(); 
    if(this.checked) {
      todo.completed = true;
    }
    else {
      todo.completed = false;
    }
  });

  const todoTitleClone = todoTitle.cloneNode(true);
  const todoDateClone = todoDate.cloneNode(true);

  const closeModalButton = document.createElement("button");
  closeModalButton.classList.add("modal-button");
  closeModalButton.textContent = "Cancel";

  closeModalButton.addEventListener("click", () => {
    todoDialog.close()
    todoDialog.replaceChildren();
  });

  const editTodoButton = document.createElement("button");
  editTodoButton.classList.add("modal-button");
  editTodoButton.textContent = "Edit";

  editTodoButton.addEventListener("click", function() {
    editTodoButton.remove();
    const editInputTitle = document.createElement("input");
    editInputTitle.type = "text";
    editInputTitle.value = todoTitle.textContent;

    const editInputDescription = document.createElement("input");
    editInputDescription.type = "text";
    editInputDescription.value = todoDescription.textContent;

    const editInputDate = document.createElement("input");
    editInputDate.type = "datetime-local";
    editInputDate.value = todo.dueDate;

    const editInputPriority = document.createElement("select");

    const optionDefault = document.createElement("option");
    optionDefault.value = todo.priority;
    optionDefault.textContent = priorityText;
    editInputPriority.appendChild(optionDefault);
    const otherOptions = priority.filter(item => item !== todo.priority);
    otherOptions.forEach(priority => {
      const text = priority.charAt(0).toUpperCase() + priority.slice(1);
      const option = new Option(text, priority);
      editInputPriority.add(option);
    });

    todoTitleClone.replaceWith(editInputTitle);
    todoDescription.replaceWith(editInputDescription);
    todoDateClone.replaceWith(editInputDate);
    todoPriority.replaceWith(editInputPriority);

    const saveEditButton = document.createElement("button");
    saveEditButton.classList.add("modal-button");
    saveEditButton.textContent = "Save";
    todoDialog.appendChild(saveEditButton);

    saveEditButton.addEventListener("click", function() {
      todoDialog.close();
      todo.title = editInputTitle.value
      todoTitle.textContent = editInputTitle.value;

      todo.description = editInputDescription.value;
      todoDescription.textContent = editInputDescription.value;

      todo.dueDate = editInputDate.value;
      todoDate.textContent = formatDate(todo.dueDate);

      todo.priority = editInputPriority.value;
      priorityText = todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1);
      todoPriority.textContent = `${priorityText} priority`;
      addPriorityColor(todo, todoDiv);
      todoDialog.replaceChildren();
    });
  });

  todoDiv.addEventListener("click", () => {
    todoDialog.showModal();
    todoDialog.appendChild(todoTitleClone);
    todoDialog.appendChild(todoDescription);
    todoDialog.appendChild(todoDateClone);
    todoDialog.appendChild(todoPriority);
    todoDialog.appendChild(closeModalButton);
    todoDialog.appendChild(editTodoButton);
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

function createNewProjectButton() {
  const newProjectButton = document.createElement("button");
  newProjectButton.classList.add("new-project-button");
  newProjectButton.textContent = "New Project";
  containerDiv.appendChild(newProjectButton);

  newProjectButton.addEventListener("click", () => {
    const projectName = prompt("Please enter the project name:", "");

    if(projectName === "") {
      alert("Please enter a name.");
    }
    else if(projectName === null) {
      return;
    }
    else {
      addProject(projectName);
      projectDiv.replaceChildren();
      createProjectsDiv();
      dialog.replaceChildren();
      createDialog();
    }
  });
}

function createDeleteProjectButton() {
  const deleteProjectButton = document.createElement("button");
  deleteProjectButton.classList.add("delete-project-button");
  deleteProjectButton.textContent = "Delete Project";
  containerDiv.appendChild(deleteProjectButton);

  deleteProjectButton.addEventListener("click", () => {

    if(projects.length === 1) {
      alert("Can't delete the only project available.");
      return;
    }

    deleteProject(currentProject);
    for(let i = 0; i < projectDiv.children.length; i++) {
      if(projectDiv.children[i].textContent === currentProject.name) {
        projectDiv.children[i].remove();
        dialog.replaceChildren();
        createDialog();
      }
    }
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
    const text = priority.charAt(0).toUpperCase() + priority.slice(1);
    const option = new Option(text, priority);
    priorityInput.add(option);
  });

  const projectLabel = document.createElement("label");
  projectLabel.htmlFor = "project-input";
  projectLabel.textContent = "Project:";

  const projectInput = document.createElement("select");
  projectInput.id = "project-input";
  projectInput.required = true;

  const defaultProjectOption = document.createElement("option");
  defaultProjectOption.value = "";
  defaultProjectOption.textContent = "--Please choose an option--";
  projectInput.add(defaultProjectOption);

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

  closeButton.addEventListener("click", () => {
    dialog.close();
    form.reset();
  });

  submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    let currentTitle = document.querySelector("#title-input").value;
    let currentDescription = document.querySelector("#description-input").value;
    let currentDueDate = document.querySelector("#dueDate-input").value;
    let currentPriority = document.querySelector("#priority-input").value;
    let project = projects.find(project => project.name === document.querySelector("#project-input").value);

    if(currentTitle !== "" && currentDueDate !== "" && currentPriority !== undefined && project !== undefined) {
      const todo = addTodoToProject(currentTitle, currentDescription, currentDueDate, currentPriority, project);

      if(currentProject === project) {
        todoContainer.replaceChildren();
        let sorted = sortByDate(project);
        sorted.forEach((todo) => {
          createTodoDiv(todo);
        }); 
      }
      form.reset();
      dialog.close();
    }
    else {
      alert("Please fill out all the fields.")
    }
  });
}

export {createContainer, createTodoDiv};