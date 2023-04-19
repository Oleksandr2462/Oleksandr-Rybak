'use strict';

const car = {

    manufacturer: "Japan",

    model: "Civic",

    yearOfManufacture: "1998",

    averageSpeed: "120",

    volumeOfTheFuelTank: "42",

    averageFuelConsumption: "10",

    drivers: [],

    carData() {
        return `
${this.manufacturer}
${this.model}
${this.yearOfManufacture}
${this.averageSpeed}
${this.volumeOfTheFuelTank}
${this.averageFuelConsumption}`
    },

    addDriver(driverName) {
        this.drivers.push(driverName);
    },

    isDriverAdded(driverName) {
        return this.drivers.includes(driverName);
    },

    calcPath(distance) {
        const fuelCount = distance / car.averageFuelConsumption;
        const time = distance / car.averageSpeed;
        const timeWithRelax = time > 4 ? Math.floor(time / 4) + time : time;
        console.log(`Для подорожі на відстань ${distance} кілометрів потрібно ${fuelCount} літрів палива і ${timeWithRelax} годин з відпочинком`)
    }
};

car.calcPath(285);
console.log(car);
console.log(car.carData());
car.addDriver("Oleksandr");
car.addDriver("Andrii");
console.log(car.drivers);
console.log(car["drivers"]);
console.log('drivers' in car);


