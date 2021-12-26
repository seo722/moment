const clock = document.querySelector("h2#clock");

//clock.innerText = "heeeeey";

//interval; // 매2초 마다 무슨 일이 일어나게 하고 싶을 때
//쓰는 게 인터벌
//setInterval(sayHello, 5000);
//setInterval(함수이름, 얼마마다 함수를 부를지)
//setTimeout(sayHello, 5000);
//한번만 나옴

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
