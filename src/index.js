import "./styles.css";
import {addProject, addTodoToProject, projects, priority, addDataToLocalStorage, addLocalStoredProjects} from "./todo.js";
import {createContainer, createTodoDiv} from "./ui.js";
import {formatDate} from "./edit.js";

console.log(projects.length);
if(projects.length === 0) {
  addProject("General");
}
console.log(projects.length); 
createContainer();

let current = localStorage;
// console.log(current);

window.addEventListener('DOMContentLoaded', () => {
    const navigationEntries = performance.getEntriesByType('navigation');
    
    if (navigationEntries.length > 0) {
        const navigationType = navigationEntries[0].type;
        
        if (navigationType === 'reload') {
            console.log('This page was refreshed!');
            addDataToLocalStorage();
            addLocalStoredProjects();
            console.log(projects.length);
        } else {
            console.log('This is a fresh page load (or navigated via link/history).');
        }
    }
});

// keep going with localStorage







