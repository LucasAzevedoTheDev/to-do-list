import "./styles.css";
import {addProject, addTodoToProject, projects, priority} from "./todo.js";
import {createContainer, createTodoDiv} from "./ui.js";
import {formatDate} from "./edit.js";

const defaultProject = addProject("General");
createContainer();

const todo1 = addTodoToProject("test 1", "blablabla", formatDate("2026-12-11T16:20"), "low", defaultProject);
createTodoDiv(todo1);
const todo2 = addTodoToProject("test 2", "blebleble", formatDate("2026-12-11T16:21"), "medium", defaultProject);
createTodoDiv(todo2);
const todo3 = addTodoToProject("test 3", "bliblibli", formatDate("2026-12-11T16:35"), "high", defaultProject);
createTodoDiv(todo3);


// add delete modal button 






