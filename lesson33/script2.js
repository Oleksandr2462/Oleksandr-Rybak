"use strict";

const MS_PER_SECOND = 1000;

const MS_PER_MINUTE = 60000;

const MS_PER_HOUR = 3600000;

const time = {
    hour: 19,

    minute: 30,

    seconds: 0,

};

let date = new Date();
console.log(date);

let transferredSeconds = +prompt("Вкажіть кількість секунд");
let transferredMinutes = +prompt("Вкажіть кількість хвилин");
let transferredHours = +prompt("Вкажіть кількість годин");

function addSecondsToDate(transferredSeconds) {
    const changedDate = date.getTime() + transferredSeconds * MS_PER_SECOND;
    date = new Date(changedDate);
    console.log(date);
}

addSecondsToDate(transferredSeconds);

function addMinutesToDate(transferredMinutes) {
    const changedDate = date.getTime() + transferredMinutes * MS_PER_MINUTE;
    date = new Date(changedDate);
    console.log(date);
}

addMinutesToDate(transferrediinutes);

function addHoursToDate(transferredHours) {
    const changedDate = date.getTime() + transferredours * MS_PER_HOUR;
    date = new Date(changedDate);
    console.log(date);
}
addHoursToDate(transferredHours);