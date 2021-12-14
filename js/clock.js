const clock = document.querySelector("h2#clock");

function callTime() {
    const date = new Date();
    clock.innerText =  `${date.getHours()}:${date.getMinutes()}`;
}

callTime();
setInterval(callTime, 1000);