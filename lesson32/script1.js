'use strict';

Завдання 3

// const num = +prompt('Введіть число');

// const number = +prompt('Введіть число');

// function akceptNumber(num, number) {
//     if (num < number) {
//         console.log('-1');
//     } else if (num > number) {
//         console.log('1');
//     } else if (num === number) {
//         console.log('0');
//     } else {
//         console.log('Не вірні данні');
//     }
// }

// akceptNumber(num, number);

Завдання 5


// const firstNumber = prompt('Введіть число');

// const secondNumber = prompt('Введіть число');

// const thirdNumber = prompt('Введіть число');

// function convertNumber(firstNumber, secondNumber, thirdNumber) {
//     return firstNumber + secondNumber + thirdNumber;
// }
// console.log('Число', convertNumber(firstNumber, secondNumber, thirdNumber));

Завдання 6

function calcSquare(lenght, width) {
    if (width) {
        return lenght ** 2;
    }

    return lenght * width;
}

console.log(calcSquare(10, 5));
console.log(calcSquare(5));


