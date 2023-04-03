'use strict';

let amountOfMoneyInTheWallet = prompt("How much money do you have in your wallet?");

let priseOfTheOneChocolate = prompt("How much cost one chocolate?");

alert(amountOfMoneyInTheWallet / priseOfTheOneChocolate);

alert(amountOfMoneyInTheWallet - (priseOfTheOneChocolate * (amountOfMoneyInTheWallet / priseOfTheOneChocolate)));


let userNumber = prompt("Будь-яке трьохзначне число");

const char1 = userNum % 10;

const char2 = ((userNum % 100) - char1) / 10;

const char3 = (userNum - (userNum % 100)) / 100;

console.log(char1);

console.log(char2);

console.log(char3);

console.log(`${char1}${char2}${char3}`);

