var a=10;
var b=20;

console.log("value befor swap")
console.log("value of a is ",a );
console.log("value of b is ",b );

// a=a+b;
// b=a-b;
// a=a-b;

a=a^b;
b=a^b;
a=a^b;

console.log("value after swap")
console.log("value of a is ",a );
console.log("value of b is ",b );


