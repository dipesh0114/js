const name = "hitesh"
const repocount = 50

console.log(`hello, ,my name is ${name} and my repo is ${repocount}`);  // string intercolation 

const gameName = new String('hitesh-hc-com')

console.log(gameName[0]);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4) //we cant use negative values in substring 
console.log(newString);

const neString = gameName.slice(-8,4)
console.log(neString);

const newstringone = "   hitesh   "
console.log(newstringone.trim());   // removes unwanted space

const url = "https:hitesh.com/hitesh%20ch"
console.log(url.replace("%20", "-"));

console.log(url.includes('hitesh'));

console.log(gameName.split('-'));

