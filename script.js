
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const milliseconds = document.getElementById('milliseconds');


function updateCountdown() {
    const currentDatetime = new Date()
    const currentYear = currentDatetime.getFullYear();


    let yearOfNextChristmas;
    if (currentDatetime < new Date(`December 24 ${currentYear} 00:00:00`)) {
        yearOfNextChristmas = currentYear
    } else {
        yearOfNextChristmas = currentYear + 1
    }


    const datetimeOfNextChristmas = new Date(`December 24 ${yearOfNextChristmas} 00:00:00`);

    const waitingTimeForChristmas = datetimeOfNextChristmas - currentDatetime;
    const d = Math.floor(waitingTimeForChristmas / 1000 / 60 / 60 / 24);
    const h = Math.floor(waitingTimeForChristmas / 1000 / 60 / 60) % 24;
    const m = Math.floor(waitingTimeForChristmas / 1000 / 60) % 60;
    const s = Math.floor(waitingTimeForChristmas / 1000) % 60;
    const ms = Math.floor(waitingTimeForChristmas % 1000);

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
    milliseconds.innerHTML = (ms < 10) ? ('00' + ms) : (ms < 100 ? ('0' + ms) : ms);
}

setInterval(updateCountdown, 20);
