let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const list = document.getElementById("todoList");
const input = document.getElementById("taskInput");
const counter = document.getElementById("taskCount");

function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function render(filter = "all") {
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    if (filter === "active" && task.done) return;
    if (filter === "completed" && !task.done) return;

    let li = document.createElement("li");
    li.className = "todo" + (task.done ? " completed" : "");

    li.innerHTML = `
<span onclick="toggleTask(${index})">${task.text}</span>

<div class="actions">

<i class="fa-solid fa-pen" onclick="editTask(${index})"></i>

<i class="fa-solid fa-trash" onclick="deleteTask(${index})"></i>

</div>
`;

    list.appendChild(li);
  });

  counter.textContent = tasks.length;

  save();
}

function addTask() {
  if (input.value.trim() === "") return;

  tasks.push({
    text: input.value,
    done: false,
  });

  input.value = "";

  render();
}

function toggleTask(i) {
  tasks[i].done = !tasks[i].done;

  render();
}

function deleteTask(i) {
  tasks.splice(i, 1);

  render();
}

function editTask(i) {
  let newText = prompt("Edit task", tasks[i].text);

  if (newText) {
    tasks[i].text = newText;

    render();
  }
}

function filterTasks(type) {
  render(type);
}

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") addTask();
});
