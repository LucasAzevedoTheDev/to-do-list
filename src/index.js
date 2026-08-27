import "./styles.css";
import {addProject, addTodoToProject, projects, priority} from "./todo.js";
import {createContainer, createTodoDiv} from "./ui.js";

const defaultProject = addProject("Default");
const secondProject = addProject("Second");
const thirdProject = addProject("Third");
const todo1 = addTodoToProject("walk", "walk the dog", "08/15", "medium", defaultProject);
const todo2 = addTodoToProject("drink", "water", "tomorrow", "max", defaultProject);
createContainer();
createTodoDiv(todo1);
createTodoDiv(todo2);
console.log(defaultProject);

// enable to sort todo divs by the dates
// change the div view to see only title, description and duedate
// change todo div colors based on the priority
// enable the div to expand, see and edit the details






