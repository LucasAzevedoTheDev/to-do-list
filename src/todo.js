import {parseISO} from "date-fns";

let projects = [];
let priority = [
  {text: "Low", value: "low"},
  {text: "Medium", value: "medium"},
  {text: "High", value: "high"}
];

class Todo {
  completed = false;

  constructor(title, description, dueDate, priority, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
  }
}

class Project {
  todos = [];

  constructor(name) {
    this.name = name;
  }
}

function addProject(name) {
  const project = new Project(name);
  projects.push(project);
  
  return project;
}


function addTodoToProject(title, description, dueDate, priority, project) {
  const todo = new Todo(title, description, dueDate, priority, project);
  project.todos.push(todo);

  return todo;
}

export {addProject, addTodoToProject, projects, priority};