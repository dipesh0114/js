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