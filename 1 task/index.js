const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (second) => {
      const endTimes = second * 1000 + Date.parse(new Date())
      function getTimeRemaining(endTime) {
          const t = endTime - Date.parse(new Date());
          const seconds = Math.floor( (t/1000) % 60 );
          const minutes = Math.floor( (t/1000/60) % 60 );
          const hours = Math.floor( (t/(1000*60*60) % 24) );
          return {
              'total': t,
              'hours': hours,
              'minutes': minutes,
              'seconds': seconds
          };
      }
      function getZero(num){
          if (num >= 0 && num < 10) {
              return '0' + num
          } else {
              return num
          }
      }
      const timeInterval = setInterval(updateClock, 1000)

      updateClock();

      function updateClock() {
          const t = getTimeRemaining(endTimes)

          timerEl.innerHTML = `${getZero(t.hours)}:${getZero(t.minutes)}:${getZero(t.seconds)}`

          if (t.total <= 0) {
              clearInterval(timeInterval)
          }
      }
  }
};


const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
    inputEl.value = inputEl.value.split('').filter(item => +item || +item === 0).join('')
});

function startTime () {
    const seconds = Number(inputEl.value)

    animateTimer(seconds)

    inputEl.value = ''
}

buttonEl.addEventListener('click', startTime)
