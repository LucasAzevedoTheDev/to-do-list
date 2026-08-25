import "./styles.css";
import {addProject, addTodoToProject, projects, priority} from "./todo.js";
import {toggleCompleted, deleteTodo, deleteProject} from "./edit.js";
import {createContainer, createTodoDiv, createProjectsDiv, createNewButton} from "./ui.js";

const defaultProject = addProject("Default");
const secondProject = addProject("Second");
const thirdProject = addProject("Third");
const todo1 = addTodoToProject("walk", "walk the dog", "08/15", "medium", "no additional notes", defaultProject);
const todo2 = addTodoToProject("drink", "water", "tomorrow", "max", "no additional notes", defaultProject);
createContainer();
createTodoDiv(todo1);
createTodoDiv(todo2);
createProjectsDiv();

// BUILD TODO.DUEDATE LOGIC (EXTERNAL LIBRARY)
// BUILD TODO.PRIORITY LOGIC





