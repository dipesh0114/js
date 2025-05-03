const balance = new Number (100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

// *************************************** maths **********************************************


console.log(Math)
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6))
console.log(Math.floor(4.9))
console.log(Math.min(3,8,4,9,1))
console.log(Math.max(10,2,7,3,15))

console.log(Math.random());
console.log(Math.floor(Math.random()*100) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max- min +1 )) + min);