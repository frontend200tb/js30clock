// Создадим переменные для секундной, минутной,
// часовой стрелок и надписи с днем недели и датой
const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const clockDate = document.querySelector(".date");

// Функция обновления времени на часах
function setDate(){
  // Создадим переменные для текущего времени и даты
  let instance = new Date();
  let sec = instance.getSeconds();
  let min = instance.getMinutes();
  let hrs = instance.getHours();
  let day = instance.getDay();
  
  // Рассчитаем угол секундной стрелки
  let secAngle = (sec/60) * 360;
  // Повернем секундную стрелку на нужный угол
  secHand.style.transform = `rotate(${secAngle}deg)`;
  // Рассчитаем угол минутной стрелки
  let minAngle = (min/60) * 360;
  // Повернем минутную стрелку на нужный угол
  minHand.style.transform = `rotate(${minAngle}deg)`;
  // Рассчитаем угол часовой стрелки
  let hrsAngle = (hrs/12) * 360;
  // Повернем часовую стрелку на нужный угол
  hourHand.style.transform =`rotate(${hrsAngle}deg)`;

  // Создадим объект с днями недели
  let days = {1:'MON',2:'TUE',3:'WED',4:'THU', 5:'FRI', 6:'SAT', 7:'SUN'};
  // Выведем надпись с днем недели и датой
  clockDate.innerHTML = `${days[day]} ${instance.getDate()}`;
}

// Через каждую секунду вызывать функцию обновления времени на часах
setInterval(setDate,1000);