// @ts-nocheck

let time = 0;
let timeIn = document.querySelector('#timeEnter');
let countDown = document.querySelector("#countdown");

function timeBtn(){
    time = Number(timeIn.value);
    setInterval(updateCountDown, 1000);
}



function updateCountDown(){
    let hours = Math.floor((time / 3600) );
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;
    hours = hours < 10 ? "0" + hours : hours;
    console.log(hours);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    countDown.innerHTML = `${hours}:${minutes}:${seconds}`;
    time--;
};






