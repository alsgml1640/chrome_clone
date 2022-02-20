const $clock = document.querySelector("#clock");
const $today = document.querySelector("#toDay");

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
$today.innerText = `${year}년 ${month}월 ${day}일`;

function timeCallback() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, 0);
  const minutes = String(date.getMinutes()).padStart(2, 0);
  const seconds = String(date.getSeconds()).padStart(2, 0);
  $clock.innerText = `${hours}:${minutes}:${seconds}`;
}

timeCallback();
setInterval(timeCallback, 1000);
