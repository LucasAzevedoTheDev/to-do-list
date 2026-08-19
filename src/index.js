import "./styles.css";
import {addProject, addTodoToProject, projects} from "./todo.js";
import {toggleCompleted, deleteTodo, deleteProject} from "./edit.js";
import {createContainer, createTodoDiv} from "./ui.js";

const defaultProject = addProject("default");
const todo1 = addTodoToProject("walk", "walk the dog", "08/15", "medium", "no additional notes", defaultProject);

const mainProject = addProject("mainProject");
const todo2 = addTodoToProject("drink", "water", "tomorrow", "max", "no additional notes", defaultProject);

createContainer();

createTodoDiv(todo1);
createTodoDiv(todo2);

console.log(defaultProject);
console.log(defaultProject);



