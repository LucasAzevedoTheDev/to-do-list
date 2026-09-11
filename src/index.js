import "./styles.css";
import {addProject, addLocalStoredProjects} from "./todo.js";
import {createContainer} from "./ui.js";

if(localStorage.getItem("projects") === null) {
  addProject("General");
} else {
  addLocalStoredProjects();
}

createContainer();








