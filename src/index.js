import "./styles.css";
import {addProject, addTodoToProject} from "./todo.js";

const defaultProject = addProject("default");

addTodoToProject("walk", "walk the dog", "08/15", "medium", "no additional notes", defaultProject);

console.log(defaultProject.todos);
