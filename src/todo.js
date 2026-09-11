let projects = [];
let priority = ["low", "medium", "high"];

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

function addDataToLocalStorage() {
  const projectsData = JSON.stringify(projects, (key, value) => {
    if(key === "project") {
      return undefined;
    }
    return value;
  });
  localStorage.setItem("projects", projectsData);
}

function addLocalStoredProjects() {
  const saved = localStorage.getItem("projects");
  const projectsArray = JSON.parse(saved);

  projectsArray.forEach((project) => {
    project.todos.forEach((todo) => {
      todo.project = project;
    });
  });
  projects.push(...projectsArray);
}

export {addProject, addTodoToProject, projects, priority, addDataToLocalStorage, addLocalStoredProjects};