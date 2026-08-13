class Todo {
  checklist = false;

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
// i need to have projects ✅
// Users should be able to create new projects ✅
//  and choose which project their todos go into 
