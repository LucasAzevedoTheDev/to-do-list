import "./styles.css";
import {addProject, addTodoToProject, projects, priority} from "./todo.js";
import {createContainer, createTodoDiv} from "./ui.js";
import {formatDate} from "./edit.js";

const defaultProject = addProject("General");
createContainer();

let current = localStorage;
// console.log(current);

for(let i = 0; i < localStorage.length; i++) {
  let project = localStorage.key(i);
  let object = localStorage.getItem(project)
  console.log(object);
  
}

// keep going with localStorage







