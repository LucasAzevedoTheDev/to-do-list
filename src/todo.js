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
// Set up a function that saves the projects 
function addDataToLocalStorage() {
  projects.forEach((project) => {
    const data = JSON.stringify(project, (key, value) => {
      if(key === "project") {
        return undefined;
      }
      return value;
    });
    localStorage.setItem(`${project.name}` , data);
  });
}
// (and todos) to localStorage every time a new project (or todo) is created
export {addProject, addTodoToProject, projects, priority, addDataToLocalStorage};