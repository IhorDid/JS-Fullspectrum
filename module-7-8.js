//TODO: № 1 ==============================================
// Натискання на кнопку "SHOW ME" має
// виводити значення з поля введення(дивіться на елементи в html - розмітці)

const input = document.querySelector('#alertInput');
const button = document.querySelector('#alertButton');

button.addEventListener('click', showInput)
function showInput() {
   console.log(input.value);
}