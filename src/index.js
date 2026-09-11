import "./styles.css";
import {addProject, addTodoToProject, projects, priority, addDataToLocalStorage, addLocalStoredProjects} from "./todo.js";
import {createContainer, createTodoDiv} from "./ui.js";
import {formatDate} from "./edit.js";

if(localStorage.length === 0) {
  addProject("General");
} else {
  addLocalStoredProjects();
}

createContainer()
console.log(projects);
console.log(localStorage);
// keep going with localStorage (now with the todos)







