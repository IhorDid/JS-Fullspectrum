// TODO: ЗАДАЧА 1  на LocalStorage =========================================
// Зробити перемикач теми. Зберігати тему у локальному сховище.
// При перезавантаженні сторінки перевіряти сховище та ставити тему, яка там вказана.
// Додати класи для змін тем

const input = document.querySelector(".checkbox");
const body = document.querySelector("body");

const KEY_THEME = "theme";
const light = "lightTheme";
const dark = "darkTheme";
const getTheme = localStorage.getItem(KEY_THEME);

switch (getTheme) {
  case dark:
    body.classList.add("dark");
    input.checked = true;

    break;
  case light:
    body.classList.add("light");
    input.checked = false;

    break;

  default:
    body.classList.add("light");
    input.checked = false;

    break;
}

input.addEventListener("click", handleChangeTheme);

function handleChangeTheme() {
  if (input.checked === false) {
    localStorage.setItem(KEY_THEME, light);
    body.classList.add("light");
    body.classList.remove("dark");
  }
  if (input.checked === true) {
    localStorage.setItem(KEY_THEME, dark);
    body.classList.add("dark");
    body.classList.remove("light");
  }
}

// TODO: ЗАДАЧА 2 на LocalStorage =========================================
// Створи перелік справ.
// Є інпут, який вводиться назва завдання.
// Після натискання на кнопку "Додати" завдання додається до списку #list.
// Поруч із кожним завданням знаходиться кнопка "Видалити", щоб можна було
// Забрати завдання зі списку.
// Список із завданнями має бути доступним після перезавантаження сторінки.

const formEl = document.querySelector("#task-form");
const inputEl = document.querySelector('input[name="taskName"]');
const listEl = document.querySelector("#task-list");

const TASKS_KEY = "tasks";
let tasks = JSON.parse(localStorage.getItem(TASKS_KEY)) || [];

formEl.addEventListener("submit", addTask);

function addTask(e) {
  e.preventDefault();
  const taskValue = inputEl.value.trim();
  //   console.log(inputEl.value);
  if (taskValue !== "") {
    tasks.push(taskValue);
    inputEl.value = "";
    renderTasks();
    saveTasks();
  }
}

function renderTasks() {
  listEl.innerHTML = "";
  tasks.forEach((task, ind) => {
    const liEl = document.createElement("li");
    liEl.innerText = task;
    const btnEl = document.createElement("button");
    btnEl.textContent = "Delete";
    btnEl.dataset.index = ind;
    btnEl.addEventListener("click", deleteTask);

    liEl.appendChild(btnEl);
    listEl.appendChild(liEl);
  });
}

function saveTasks() {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}

function deleteTask(e) {
  const taskInd = e.target.dataset.index;
  tasks.splice(taskInd, 1);
  renderTasks();
  saveTasks();
}

renderTasks();
