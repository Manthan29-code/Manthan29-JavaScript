// types of console 
console.log("hello")
console.info("information")
console.warn("hello")
console.error("hello")

//  various data type  in js
console.log("every thing about data type in js")
var a=10;
var b=10.755;
var c="manthan";
var d=10.755;
var e=true;
var f;
var n=null;
console.log("value of a is" , a)
console.log("type of a is" , typeof a)
console.log("value of b is" , b)
console.log("type of b is" , typeof b)
console.log("value of c is" , c)
console.log("type of c is" , typeof c)
console.log("value of d is" , d)
console.log("type of d is" , typeof d)
console.log("value of e is" , e)
console.log("type of e is" , typeof e)
console.log("value of f is" , f)
console.log("type of f is" , typeof f)
console.log("value of n is" , n)
console.log("type of n is" , typeof n)

let value = NaN;
console.log("type of value is" ,typeof value);  // "number"
console.log("value of value is",value);         // NaN

console.log(typeof undefined);

console.log(null == undefined); // true (loose comparison)
console.log(null === undefined); // false (strict comparison)
console.log(null == 0); // false
console.log(null == false); // false


console.log(NaN == NaN);    // false
console.log(NaN === NaN);   // false

let isAdult = true;
let x = isAdult ? 13 : 18;
console.log(x); 