import "./styles.css";
import {addProject, addTodoToProject, projects, priority} from "./todo.js";
import {createContainer, createTodoDiv} from "./ui.js";
import {formatDate} from "./edit.js";

const defaultProject = addProject("General");
createContainer();

let current = localStorage;
console.log(current);

for(i = 0; i < current[i]; i++) {
  addProject(current[i].name);
}

// keep going with localStorage







