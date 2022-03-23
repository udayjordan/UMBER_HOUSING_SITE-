/*
coding challenge 1
const calcAvrage = (val1, val2, val3) => {
    const avg = (val1 + val2 + val3) / 3;
    return avg;

}
const avgDolphins = calcAvrage(44, 23, 71);
const avgKholas = calcAvrage(65, 54, 49);


console.log(checkWinner(avgDolphins, avgDolphins));
function checkWinner(avgDolphins, avgKholas) {
    if (avgDolphins >= 2 * avgKholas) {
        return 'dolphin is the winner';
    }
    else {
        return 'khola is the winner';
    }

}*/
/* coding challenge 2
function calcTip(bills) {
    if (50 < bills < 300) {
        return (15 * bills) / 100;
    }
    else {
        return (20 * bills) / 100;
    }
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);*/
/* coding chalenges
const jonas = {
    friends: ['michael', 'peter', 'steven']
};

const bestFriend = jonas.friends[0];
const totalFriend = jonas.friends;


console.log('jonas has ' + totalFriend.length + '  friend  and among them ' + bestFriend + ' is the best ');
*/

//.......ERROR IN THIS CODE NEEDS RECTIFICATION
/* CODING CHALLENGE FOR A BMI CALCI
const details = {
    fullName: ['MARK MILLER', 'JOHN SMITH'],
    weight1: 78,
    weight2: 92,
    height1: 1.69,
    height2: 1.95,
    calcBMI: function () {
        this.val1 = this.weight1 / (this.height1 * this.height1);
        this.val2 = this.weight2 / (this.height2 * this.height2);
        return this.val1;

    }




};
details.calcBMI();
if (this.val1 >= this.val2) {
    console.log(`${details.fullName[0]} BMI ${this.val1} has higher `)};*/

// CODING CHALLENGE FOR LOOPS
/*let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let total = [];
function calcTip(bills) {
    if (50 < bills < 300) {
        return (15 * bills) / 100;
    }
    else {
        return (20 * bills) / 100;
    }
}
for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    total.push(tips[i] + bills[i]);
}
console.log(tips);
console.log(total);*/
//CODING CHALLENGE
/*const calcAvrage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

console.log(calcAvrage([2, 3, 5, 1]));*/
'use strict';
let temperatures = [3, -2, -6, -1, 9, 13, 17, 15, 14, 9, 5];
let max = temperatures[0];

for (let i = 1; i < temperatures.length; i++) {
  if (temperatures[i] > max) {
    max = temperatures[i];
  }
}
console.log(max);
let min = temperatures[0];

for (let i = 1; i < temperatures.length; i++) {
  if (temperatures[i] < min) {
    min = temperatures[i];
  }
}
console.log(min);
console.log(max - min);
