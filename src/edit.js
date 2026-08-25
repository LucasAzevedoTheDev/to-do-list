import {projects} from "./todo.js";

function deleteTodo(todo) {
  let currentProject = todo.project.todos;

  for (let i = 0; i < currentProject.length; i++) {
    if (currentProject[i] === todo) {
      currentProject.splice(i, 1);
      break;
    }
  }
}

function deleteProject(project) {

  for (let i = 0; i < projects.length; i++) {
    if(projects[i] === project) {
      projects.splice(i, 1);
      break;
    }
  }
}

export {deleteTodo, deleteProject};