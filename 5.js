console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0 );
console.log(null >= 0);

/* the reason is that equality check == and comparisons < > >= <= work differently.
comparisons convert null to a number, treating it was 0.
that's why (3) null >= 0 is true and (1)null > 0 is false.
*/

console.log("2" === 2); // '===' - strict check