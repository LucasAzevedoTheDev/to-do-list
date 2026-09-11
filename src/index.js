import "./styles.css";
import {addProject, addLocalStoredProjects} from "./todo.js";
import {createContainer} from "./ui.js";

if(localStorage.length === 0) {
  addProject("General");
} else {
  addLocalStoredProjects();
}

createContainer()








