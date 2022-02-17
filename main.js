const nightButton = document.querySelector(".night");
const dayButton = document.querySelector(".day");
const body = document.querySelector("body");
const title = document.querySelector("screen__title");


function handleNight(){
    localStorage.setItem("nightOrDay", "night");
    body.classList.add("night-screen");
}

function handleDay(){
    localStorage.setItem("nightOrDay", "day");
    body.classList.remove("night-screen");
}


nightButton.addEventListener("click", handleNight);
dayButton.addEventListener("click", handleDay);