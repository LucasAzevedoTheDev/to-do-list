class Todo {

  constructor(title, description, dueDate, priority, notes, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.project = project;
  }
  completed = false;
}

class Project {
  
  constructor(name) {
    this.name = name;
  }
  todos = [];
}

function addProject(name) {
  const project = new Project(name);
  projects.push(project);
  return project;
}


function addTodoToProject(title, description, dueDate, priority, notes, project) {
  const todo = new Todo(title, description, dueDate, priority, notes, project);
  project.todos.push(todo);
}

let projects = [];

export {addProject, addTodoToProject, projects};