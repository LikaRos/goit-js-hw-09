const btnStart = document.querySelector('button[data-start]');
const btnClose = document.querySelector('button[data-stop]');
let timerId = null;
const changeColor = () => {
  timerId = setInterval(() => {
    const color = getRandomHexColor();
    document.body.style.backgroundColor = color;
  }, 500);
  btnStart.setAttribute('disabled', 'disabled');
};

const stopColor = () => {
  clearInterval(timerId);
  btnStart.removeAttribute('disabled', 'disabled');
};
btnStart.addEventListener('click', changeColor);
btnClose.addEventListener('click', stopColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
