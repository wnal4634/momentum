const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${min}:${sec}`;
}

getClock(); // 있어야 00:00:00이 안 보이고 바로 실행. 없애보면 알 수 있을 것.
setInterval(getClock, 1000);
