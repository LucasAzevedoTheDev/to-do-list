import "./styles.css";
import {addProject, addTodoToProject, projects, priority, addDataToLocalStorage} from "./todo.js";
import {createContainer, createTodoDiv} from "./ui.js";
import {formatDate} from "./edit.js";

const defaultProject = addProject("General");
createContainer();

let current = localStorage;
// console.log(current);

for(let i = 0; i < localStorage.length; i++) {
  const projectName = localStorage.key(i);
  const projectObject = localStorage.getItem(projectName);
  const object = JSON.parse(projectObject);
  console.log(object);
  projects.push(object);
  console.log(projects);
}

// keep going with localStorage







