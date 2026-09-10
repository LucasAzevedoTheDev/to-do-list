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
  projects.forEach((project) => {
    const projectsData = JSON.stringify(project, (key, value) => {
      if(key === "project") {
        return undefined;
      }
      return value;
    });
    localStorage.setItem(`${project.name}`, projectsData);
  });
}

function addLocalStoredProjects() {
  for(let i = 0; i < localStorage.length; i++) {
    const projectName = localStorage.key(i);
    const projectObject = localStorage.getItem(projectName);
    const object = JSON.parse(projectObject);

    const alreadyHave = projects.some(project => project.name === projectName);
    if(!alreadyHave) {
      projects.push(object);
    }
  }
}

export {addProject, addTodoToProject, projects, priority, addDataToLocalStorage, addLocalStoredProjects};