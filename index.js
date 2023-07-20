// @ts-nocheck

let time = 3600;
let countDown = document.querySelector("#countdown");

setInterval(updateCountDown, 1000);

function updateCountDown(){
    const minutes = Math.floor(time / 60);
    let seconds = time % 60; 
    seconds = seconds < 10 ? "0" + seconds : seconds;
    countDown.innerHTML = `${minutes}:${seconds}`;
    time--;
}



