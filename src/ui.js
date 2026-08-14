import "./styles.css";


const containerDiv = document.createElement("div");
containerDiv.classList.add("container-div");

function createContainer() {
  const body = document.querySelector("body");
  body.appendChild(containerDiv);
}


