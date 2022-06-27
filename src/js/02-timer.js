// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';
//модуль  для Alert
import Notiflix from 'notiflix';

// нинициализировать flatpickr
const input = document.querySelector('#datetime-picker');

const buttonStart = document.querySelector('button[data-start]');
buttonStart.setAttribute('disabled', 'disabled');
buttonStart.addEventListener('click', startTimer);

const spanDays = document.querySelector('span[data-days]');
const spanHours = document.querySelector('span[data-hours]');
const spanMinutes = document.querySelector('span[data-minutes]');
const spanSeconds = document.querySelector('span[data-seconds]');

let selectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectDate(selectedDates[0]);
  },
};

flatpickr(input, options);

function startTimer(event) {
  const intervalCountDown = setInterval(() => {
    const timeDifference = selectedDate - Date.now();

    if (timeDifference > 0) {
      const updateDate = convertMs(timeDifference);

      spanDays.textContent = addLeadingZero(updateDate['days']);
      spanHours.textContent = addLeadingZero(updateDate['hours']);
      spanMinutes.textContent = addLeadingZero(updateDate['minutes']);
      spanSeconds.textContent = addLeadingZero(updateDate['seconds']);
    } else {
      clearInterval(intervalCountDown);
    }
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);

  // Remaining hours
  const hours = Math.floor((ms % day) / hour);

  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);

  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function selectDate(date) {
  if (date < Date.now()) {
    Notiflix.Notify.failure('Please choose a date in the future');
  } else {
    buttonStart.removeAttribute('disabled', 'disabled');
    selectedDate = date;
  }
}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

c;
