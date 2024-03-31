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
