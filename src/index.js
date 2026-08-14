import "./styles.css";
import {addProject, addTodoToProject, projects} from "./todo.js";

const defaultProject = addProject("default");
addTodoToProject("walk", "walk the dog", "08/15", "medium", "no additional notes", defaultProject);

const mainProject = addProject("mainProject");
addTodoToProject("drink", "water", "tomorrow", "max", "no additional notes", mainProject);


console.log(defaultProject);
console.log(projects);

