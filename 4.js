// *************************************** conversion ********************************************************

let score = 33
let score1 = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number("33abc")
console.log(typeof valueInNumber);
console.log(valueInNumber);  // output = NaN 


let isLoggedIn = "python"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1=>true , 0 => false, "" => false, "python" =>true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

//******************************************************* operations *******************************************************

let value = 3 
let negValue = -value
console.log(negValue);
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

console.log("1" + 2);
console.log(1 + "3");
console.log("1" + 2 + 2);
console.log(1+ 2 + "2");


