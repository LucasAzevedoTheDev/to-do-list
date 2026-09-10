import "./styles.css";
import {addProject, addTodoToProject, projects, priority, addDataToLocalStorage, addLocalStoredProjects} from "./todo.js";
import {createContainer, createTodoDiv} from "./ui.js";
import {formatDate} from "./edit.js";

if(projects.length === 0) {
  addProject("General");
}

createContainer();

window.addEventListener('DOMContentLoaded', () => {
    const navigationEntries = performance.getEntriesByType('navigation');
    
    if (navigationEntries.length > 0) {
        const navigationType = navigationEntries[0].type;
        
        if (navigationType === 'reload') {
            addDataToLocalStorage();
            addLocalStoredProjects();
        } 
    }
});

// keep going with localStorage







