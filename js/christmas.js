const clockTitle = document.querySelector("#x-mas");

function getTime() {
  const xmasDay = new Date(`2022-12-25:00:00:00+0900`);
  const now = new Date();
  const difference = new Date(xmasDay - now);

  const secondsInMs = Math.floor(difference / 1000);
  const minutesInMs = Math.floor(secondsInMs / 60);
  const hoursInMs = Math.floor(minutesInMs / 60);
  const days = Math.floor(hoursInMs / 24);

  const seconds = secondsInMs % 60;
  const minutes = minutesInMs % 60;
  const hours = hoursInMs % 24;

  const daysStr = `${days < 10 ? `0${days}` : days}d`;
  const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
  const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m`;
  const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}s`;

  clockTitle.innerHTML = `I'm just waiting for Christmas! <br> ${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
}
getTime();
setInterval(getTime, 1000);
