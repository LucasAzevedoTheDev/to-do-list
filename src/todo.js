let projects = [];
let priority = ["Low", "Medium", "High"];

class Todo {
  completed = false;

  constructor(title, description, dueDate, priority, notes, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
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


function addTodoToProject(title, description, dueDate, priority, notes, project) {
  const todo = new Todo(title, description, dueDate, priority, notes, project);
  project.todos.push(todo);

  return todo;
}

export {addProject, addTodoToProject, projects, priority};