// all important things about let 

let x=100;
 console.log("value of let x=",x);

{
    // block
    // all let variable are accessible in their inner block(scop)
    console.log("value of  let x inside block =",x);
    x=57; // also we can change it's value
    console.log("value of  let x inside block after change=",x);


    let y=29;
    console.log("value of y inside block =",y);
    
}// let y is only accessible in this scop
// console.log("value of y outside block =",y);  // ReferenceError: Cannot access 'y' before initialization

console.log("value of let x after change  insside block and access from outside=",x);
// let x=45 // we can't redeclare it
let y=35;
console.log("value of y =",y);
//var y=35;   error
let ud;
console.log("value of ud =",ud);
