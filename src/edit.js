import {projects} from "./todo.js";
import {parseISO, format, isToday, isThisYear, compareAsc} from "date-fns";
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

function formatDate(date) {
  let properDate = parseISO(date);

  if(isToday(properDate)) {
    return format(properDate, "'Today,' HH:mm a");
  }
  else if(isThisYear(properDate)) {
    return format(properDate, "MMM dd, HH:mm a"); 
  }
  else {
    return format(properDate, "MM/dd/yy, HH:mm a")
  }
}

function sortByDate(project) {
  let sorted = project.todos.sort((a, b) => compareAsc(a.dueDate, b.dueDate));
  return sorted;
}

export {deleteTodo, deleteProject, formatDate, sortByDate}; 