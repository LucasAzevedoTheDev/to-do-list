class Todo {
  completed = false;

  constructor(title, description, dueDate, priority, notes) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
  }
}

class Project {
  
  constructor(name) {
    this.name = name;
    this.todos = [];
  }
}
let projects = [];

function addProject(name) {
  const project = new Project(name);
  projects.push(project);
  return project;
}


function addTodoToProject(title, description, dueDate, priority, notes, project) {
  const todo = new Todo(title, description, dueDate, priority, notes);
  project.todos.push(todo);
}

const defaultProject = addProject("default");

export {defaultProject, projects};