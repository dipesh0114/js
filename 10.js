let mydate = new Date()
console.log(mydate);

console.log(mydate.toString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());

console.log(typeof mydate);

let mycreateddate = new Date(2023, 0, 23);
console.log(mycreateddate.toDateString());

let mycreateddates = new Date("01-14-2023")

let mytimestamp = Date.now()

console.log(mytimestamp);
console.log(mycreateddate.getTime());
console.log (Math.floor((mycreateddate.getTime())/1000)); // time in seconds 

let newDate = new Date ()

console.log(newDate.toLocaleString('default', {
    weekday: "long",

}))

