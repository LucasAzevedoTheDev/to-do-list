import "./styles.css";
import {addProject, addTodoToProject, projects, priority} from "./todo.js";
import {createContainer, createTodoDiv} from "./ui.js";
import {formatDate} from "./edit.js";

const defaultProject = addProject("General");
createContainer();

// fix priorityText bug (ui.js:190)
// add localStorage feature







