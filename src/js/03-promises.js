//модуль  для Alert
import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const delayInput = form.querySelector('[name="delay"]');
  const stepInput = form.querySelector('[name="step"]');
  const amountInput = form.querySelector('[name="amount"]');
  let i = 0;

  const intervId = setInterval(() => {
    createPromise(i, delayInput.value)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(` Rejected ${position} in ${delay}ms`);
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    i += 1;

    if (i === Number(amountInput.value)) {
      clearInterval(intervId);
    }
  }, stepInput.value);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
