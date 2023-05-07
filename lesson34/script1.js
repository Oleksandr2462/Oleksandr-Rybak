'use strict';

function Purchase(name, count, bought = false, price) {

    this.name = name;
    this.count = count;
    this.bought = bought;
    this.price = price;
    this.sum = () => this.count * this.price;

}


const purchases = [
    new Purchase('Сосиски', 2, false, 90),
    new Purchase('Сиp', 0.300, true, 300),
    new Purchase('макарони', 1, false, 60),

];

function logPurchases() {
    const bought = purchases.filter(purchase => purchase.bought);
    const notBought = purchases.filter(purchase => !purchase.bought);
    const arr = [...notBought, ...bought]
    console.log(arr);
}


function buy(name) {
    const foundPurchase = purchases.find(
        purchase => purchase.name === name
    );
    if (!foundPurchase) return;
    foundPurchase.bought = true;
}