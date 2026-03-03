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

function createTaskElement(task Text) {
  const li = document.createElement("li")

  const textSpan = document.createElement("span");
  textSpan.textContent = taskText;

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
    const li = createElement(task Text);
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


                            
