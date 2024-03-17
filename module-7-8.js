//TODO: № 1 ==============================================
// Натискання на кнопку "SHOW ME" має
// виводити значення з поля введення(дивіться на елементи в html - розмітці)

// const input = document.querySelector('#alertInput');
// const button = document.querySelector('#alertButton');

// button.addEventListener('click', showInput)
// function showInput() {
//    console.log(input.value);
// }

//TODO: № 2 ==============================================
// Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
// Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.

// const leftInput = document.querySelector('#leftSwapInput');
// const rightInput = document.querySelector('#rightSwapInput');
// const button = document.querySelector('#swapButton');

// button.addEventListener('click', swapInput);

// function swapInput() {
//    const leftInputText = leftInput.value;
//    leftInput.value = rightInput.value;
//    rightInput.value = leftInputText;
// };

//TODO: № 4 ==============================================
// Кнопка "Приховати" ховає текст і замінює назву кнопки на
// "Розкрити", при повторному натисканні текст знову стає доступним
// і кнопка набуває початкового вигляду.

// const ref = {
//   inpuEl: document.querySelector("#passwordInput"),
//   btnEl: document.querySelector("#passwordButton"),
// };

// ref.btnEl.addEventListener("click", onChangeVisible);
// function onChangeVisible() {
//   const inputType = ref.inpuEl.getAttribute("type");
//   console.log(inputType);
//   const toggleTypeInput = inputType === "password" ? "text" : "password";
//   ref.inpuEl.setAttribute("type", toggleTypeInput);
//   //   if (ref.btnEl.textContent !== "Розкрити") {
//   //     ref.btnEl.textContent = "Розкрити";
//   //   } else {
//   //     ref.btnEl.textContent = "Приховати";
//   //   }
//   const btnValue = ref.btnEl.textContent;
//   const btnValueToggle = btnValue === "Приховати" ? "Розкрити" : "Приховати";
//   ref.btnEl.textContent = btnValueToggle;
// }

//?  Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
//? Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
//? Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
//? Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// const input = document.querySelector("#validation-input");
// const rec = () => {
//   if (input.value.length === Number(input.getAttribute("data-length"))) {
//     input.classList.remove("invalid");
//     input.classList.add("valid");
//   } else {
//     input.classList.remove("valid");
//     input.classList.add("invalid");
//   }
// };
// input.addEventListener("blur", rec);
