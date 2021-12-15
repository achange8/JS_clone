const clock = document.querySelector("h2#clock");

function callTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    clock.innerText =  `${hours}:${minutes}`;
}

callTime();
setInterval(callTime, 1000);