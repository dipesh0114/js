// primitive 

// 7 types : string , number , boolean , null, undefined, symbol, Bigint 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // output = false 
//reference (non- primitive)
// array, objects , functions

const heros = ["ironman","thor","hulk"];

let myObj = {
    name: "dipesh",
    age: 21
}

const myFunction = function(){
    console.log("hello world")


}

myFunction();
