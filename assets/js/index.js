const day = document.getElementById("days");
const hour = document.getElementById("hours");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");

let target_date = new Date();
let regressiveTime = 14;
target_date.setDate(target_date.getDay() + regressiveTime);

let dias, horas, minutos, segundos;

let regressiva = document.getElementById("regressiva");
setInterval(function() {
    let current_date = new Date().getTime();
    let segundos_f = (target_date - current_date) / 1000;
    dias = parseInt(segundos_f / 86400);
    segundos_f = segundos_f % 86400;

    horas = parseInt(segundos_f / 3600);
    segundos_f = segundos_f % 3600;

    minutos = parseInt(segundos_f / 60);
    segundos = parseInt(segundos_f % 60);
    day.innerHTML = dias;
    hour.innerHTML = horas;
    minute.innerHTML = minutos;
    second.innerHTML = segundos;

}, 1000);
/** 
 * 
 
 function showTime() {
     let date = new Date();
     dateDay = date.getDay();
     dateHour = date.getHours();
     dateMinute = date.getMinutes();
    dateSecond = date.getSeconds();
}

let timer = setInterval(function() {
    showTime();
    day.innerHTML = dateDay;
    hour.innerHTML = dateHour;
    minute.innerHTML = dateMinute;
    second.innerHTML = dateSecond;
}, 1000);
*/