// Simple Todo App - JavaScript Practice

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskCounter = document.getElementById("taskCounter");

let taskCount = 0;

function updateCounter() {
  taskCounter.textContent = "Tasks: " + taskCount;
}

function saveTasks() {
  const tasks = [];
  const spans = taskList.querySelectorAll("li span");

  spans.forEach(function (span) {
    tasks.push(span.textContent);
  });
  
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function createTaskElement(taskText) {
  const li = document.createElement("li")

  const checkbox = document.createElement("input")
  checkbox.type = "checkbox";
  checkbox.style.marginRight = "8px";

  const textSpan = document.createElement("span");
  textSpan.textContent = taskText;

  checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
      textSpan.style.textDecoration = "line-through";
    } else {
      textspan.style.textDecoration = "none";
    }
  });

  // Delete button 
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.marginLeft = "10px";

  deleteBtn.addEventListener("click", function() {
    li.remove();  // simpler als taskList.removeChild(li) 

    if (taskCount > 0) {
      taskCount--;
    }
    
    updateCounter();
    saveTasks();
  });

  li.appendChild(checkbox);
  li.appendChild(textSpan);
  li.appendChild(deleteBtn);

  return li;
}

function addTodo() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = createTaskElement(taskText);
  taskList.appendChild(li);
  
  taskCount++;
  updateCounter();
  saveTasks();

  taskInput.value = "";
  taskInput.focus();
}

function loadTasks() {
  const saved = localStorage.getItem("tasks");
  if (!saved) {
    updateCounter();
    return;
  }

  const tasks = JSON.parse(saved);

  tasks.forEach(function (taskText) {
    const li = createElement(taskText);
    taskList.appendChild(li);
  });

  taskCount = taskList.children.lenght;
  updateCounter();
}

addTaskBtn.addEventListener("click", addTodo);

  // Enter-Taste soll auch hinzufügen
  taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      addTodo();
    }
  });

  // Load tasks on page start
  loadTasks();


                            
