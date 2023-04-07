let time = document.querySelector(".time");
let date = document.querySelector(".date");

// months
const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Des",
];

// week
const week = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// GetTime func
function currentTime() {
  // new Data
  const newData = new Date();
  // Time
  const getHour = newData.getHours();
  const getMin = newData.getMinutes();

  // Data
  const getWeekDaysNum = newData.getDay();
  const getDay = newData.getDate();
  const getMonthNum = newData.getMonth();
  const getYear = newData.getFullYear();

  let h = getHour;
  let m = getMin;
  let section = "AM";

  // HOURS
  if (getHour > 12) {
    h = getHour - 12;
    section = "PM";
  } else {
    getHour;
    section = "AM";
  }

  if (h < 10) {
    h = "0" + h;
  } else {
    h;
  }

  // MINS
  if (m < 10) {
    m = "0" + m;
  } else {
    m;
  }

  time.innerHTML = `<span class="clock">${h}:${m}</span>
  <span class="am_pm">${section}</span>`;
  date.innerHTML = `${week[getWeekDaysNum-1]}, ${getDay < 10 ? "0" + getDay : getDay} ${
    month[getMonthNum]
  } ${getYear}`;
}

setInterval(currentTime, 1000);
