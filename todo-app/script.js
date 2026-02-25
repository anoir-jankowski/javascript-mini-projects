// Simple Todo App - JavaScript Practice

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

const taskCounter = document.getElementById("taskCounter");
let taskCount = 0;

function updateCounter() {
  taskCounter.textContent = "Tasks: " + taskCount;
}

function addTodo() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  
  const textSpan = document.createElement("span");
  textSpan.textContent = taskText;

  // Delete button 
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.marginLeft = "10px";

  deleteBtn.addEventListener("click", function() {
    li.remove();  // simpler als taskList.removeChild(li) 
    taskCount--;
    updateCounter();
  });

  li.appendChild(textSpan);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskCount++;
  updateCounter();

  taskInput.value = "";
  taskInput.focus();
}

addTaskBtn.addEventListener("click", addTodo);

  // Enter-Taste soll auch hinzufügen
  taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      addTodo();
    }
  });

  // Initial counter display
  updateCounter();


                            
