"use strict";

const ACTIVE_CLASS = 'traffic-light--active';

const trafficLights = document.getElementById('trafficLights');
const lights = trafficLights.children;
const control = document.getElementById('trafficLigthControl');

let direction = -1;
let colorNumber = 0;

control.addEventListener('click', () => {
    if (colorNumber === 0 || colorNumber === lights.length - 1) {
        direction *= -1;
    }
    lights[colorNumber].classList.remove(ACTIVE_CLASS);
    colorNumber += direction;
    lights[colorNumber].classList.add(ACTIVE_CLASS);
});