const clock = document.querySelector(".js-clock .clock__text");

function getTime() {
  const now = new Date();
  const hours = (now.getHours()>12 ? now.getHours()-12 : now.getHours());
  const minutes = now.getMinutes();
  const hangul = `${hours <=12 ? "AM" : "PM"}`;
  const time = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
  clock.innerHTML = `${hangul} ${time}`;
  return;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
  return;
}

init();
