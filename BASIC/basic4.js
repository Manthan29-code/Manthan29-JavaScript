// note about const variable

let a=100
console.log("value of a =", a);
a=1 //  assign new value
console.log("value of a  =",a);


const pi=3.14;
console.log("value of pi block =",pi);

//const pi=3.1;  // can't change value once declared
console.log("value of pi outside block =",pi);

{
    // we can change value of const in subscope 
    const pi=3.1;  
    console.log("value of pi inside block after made change on it =",pi);
    // ths change will remain effective in that scope 
}

console.log("value of pi outside block =",pi);


const xyx=null;  //ReferenceError: xyz is not defined
console.log("value of xyz outside block =",xyz);

